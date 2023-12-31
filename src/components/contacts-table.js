import React, {useEffect} from 'react'
import {Table, Button, Space} from 'antd'
import {getAllContacts} from "../api/contacts"
import {store} from "../store"
import {observer} from "mobx-react-lite"
import {toJS} from "mobx"
import styled from "styled-components"
import {CloudDownloadOutlined} from "@ant-design/icons"

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = ({updateContacts, addContact}) => (
  <TitleWrapper>
    <h1>Contacts</h1>
    <Space>
      <Button onClick={updateContacts}><CloudDownloadOutlined /></Button>
      <Button type="primary" onClick={addContact}>Add contact</Button>
    </Space>
  </TitleWrapper>
)


const ContactsTable = observer(() => {
  const contacts = store.get().ContactsStore.getAllContacts()
  const [execute, isInFly] = getAllContacts.useLocal()

  useEffect(() => {
    execute().then()
  }, [])

  const columns = [
    {
      title: "Name Surname",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Favorite",
      dataIndex: "favorite",
      render: (favorite) => favorite ? <>Yes</> : <>No</>,
      sorter: (a, b) => b["favorite"] - a["favorite"],
      sortDirections: ["ascend"],
    },
  ]

  return (
    <Table
      rowKey={record => record["_id"]}
      title={() => <Title
        updateContacts={() => execute()}
        addContact={() => {
        }}
      />}
      dataSource={toJS(contacts)}
      loading={isInFly}
      columns={columns}
    />
  )
})

export default ContactsTable