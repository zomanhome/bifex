import React from "react"
import {Form, Input, Checkbox, Button, Space, Divider} from "antd"


const onFinish = (values) => {
  console.log("Success:", values)
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo)
};
const Calculator = () => (
  <>
    <h2>Retirement details</h2>

    <Divider/>

    <Form
      name="bifex"
      labelCol={{span: 8}}
      wrapperCol={{span: 16}}
      // style={{maxWidth: 600}}
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Current age"
        name="age"
        rules={[
          {
            required: true,
            message: "Please input your age!",
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Annual pre-tax income"
        name="income"
        rules={[
          {
            required: true,
            message: "Please input your income!",
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Current retirement savings"
        name="savings"
        rules={[
          {
            required: true,
            message: "Please input your savings!",
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Monthly contributions"
        name="contributions"
        rules={[
          {
            required: true,
            message: "Please input your contributions!",
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Monthly budget in retirement"
        name="budget"
        rules={[
          {
            required: true,
            message: "Please input your budget!",
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Other retirement income"
        name="other"
      >
        <Input/>
      </Form.Item>

      {/*<Form.Item*/}
      {/*  name="remember"*/}
      {/*  valuePropName="checked"*/}
      {/*  wrapperCol={{*/}
      {/*    offset: 8,*/}
      {/*    span: 16,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Checkbox>Remember me</Checkbox>*/}
      {/*</Form.Item>*/}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </>

)

export default Calculator