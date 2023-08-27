import React from "react"
import {Form, Button, Divider, InputNumber, Row, Col, Alert, Space} from "antd"
import {DollarOutlined, PercentageOutlined, ScheduleOutlined, UserOutlined} from "@ant-design/icons"
import {CurrencyFormatter, PercentFormatter} from "../../helpers"
import styled from "styled-components"
import {observable} from "mobx"
import {observer} from "mobx-react-lite"
import {fv, pv} from 'financial'

const results = observable.object({
  have: 0,
  need: 0,
})

const onFinish = (values) => {
  const {age, income, savings, contribution, retirement, before, after, lifecycle, inflation} = values

  const rate_fv = (before - inflation) / 12
  const period_fv = retirement - age
  const sum_fv = contribution * 12
  results.have = fv(rate_fv, period_fv, -sum_fv, -contribution).toFixed(0)

  const rate_pv = (after - inflation) / 12
  const period_pv = lifecycle - age
  const sum_pv = income * 12
  results.need = pv(rate_pv, period_pv, -sum_pv, savings).toFixed(0)

}

const InputNumberFull = styled(InputNumber)`
  width: 100% !important;
`

const initialValues = {
  age: 46,
  income: 3000,
  savings: 20000,
  contribution: 1000,
  retirement: 67,
  before: 0.06,
  after: 0.04,
  lifecycle: 80,
  inflation: 0.03,
}

const Calculator = observer(() => (
  <>
    <h2>Retirement details</h2>

    <Divider/>

    <Row gutter={16}>

      <Col span={9}>
        <Form
          name="bifex"
          labelCol={{span: 12}}
          wrapperCol={{span: 12}}
          initialValues={initialValues}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Current age"
            name="age"
            rules={[
              {
                required: true,
                pattern: /^[2-6][0-7]$/,
                message: "From 20 to 67!",
              },
            ]}
          >
            <InputNumberFull
              controls={false}
              prefix={<UserOutlined/>}
              suffix={"YEARS"}
            />
          </Form.Item>

          <Form.Item
            label="Monthly income"
            name="income"
            rules={[
              {
                required: true,
                pattern: /^\d+$/,
                message: "Require!",
              },
            ]}
          >
            <InputNumberFull
              controls={false}
              formatter={CurrencyFormatter}
              prefix={<DollarOutlined/>}
              suffix={"USD"}
            />
          </Form.Item>

          <Form.Item
            label="Current savings"
            name="savings"
            rules={[
              {
                required: true,
                message: "Require!",
              },
            ]}
          >
            <InputNumberFull
              controls={false}
              formatter={CurrencyFormatter}
              prefix={<DollarOutlined/>}
              suffix={"USD"}
            />
          </Form.Item>


          <Form.Item
            label="Monthly contribution"
            name="contribution"
            rules={[
              {
                required: true,
                message: "Require!",
              },
            ]}
          >
            <InputNumberFull
              controls={false}
              formatter={CurrencyFormatter}
              prefix={<DollarOutlined/>}
              suffix={"USD"}
            />
          </Form.Item>

          <Form.Item
            label="Life expectancy"
            name="lifecycle"
          >
            <InputNumberFull
              disabled={true}
              controls={false}
              formatter={CurrencyFormatter}
              prefix={<UserOutlined/>}
              suffix={"YEARS"}
            />
          </Form.Item>

          <Form.Item
            label="Age at retirement"
            name="retirement"
          >
            <InputNumberFull
              disabled={true}
              controls={false}
              formatter={CurrencyFormatter}
              prefix={<UserOutlined/>}
              suffix={"YEARS"}
            />
          </Form.Item>

          <Form.Item
            label="Investment return"
            name="before"
          >
            <InputNumberFull
              disabled={true}
              controls={false}
              formatter={PercentFormatter}
              prefix={<ScheduleOutlined/>}
              suffix={"BEFORE"}
            />
          </Form.Item>

          <Form.Item
            label="Investment return"
            name="after"
          >
            <InputNumberFull
              disabled={true}
              controls={false}
              formatter={PercentFormatter}
              prefix={<ScheduleOutlined/>}
              suffix={"AFTER"}
            />
          </Form.Item>

          <Form.Item
            label="Inflation rate"
            name="inflation"
          >
            <InputNumberFull
              disabled={true}
              controls={false}
              formatter={PercentFormatter}
              prefix={<ScheduleOutlined/>}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Calculate my retirement
            </Button>
          </Form.Item>
        </Form>
      </Col>

      {!!results.have && !!results.need && <Col span={15}>
        <Alert style={{width: "100%"}} type="info" message={`What you'll have: ${CurrencyFormatter(results.have)}`}/>
        <Divider/>
        <Alert type="warning" message={`What you'll need: ${CurrencyFormatter(results.need)}`}/>
      </Col>}

    </Row>


  </>

))

export default Calculator