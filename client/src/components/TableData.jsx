import React from 'react'
import { Space, Table, Tag } from 'antd';

const TableData = ({ data}) => {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text, record) => (
            <span>{record.first_name} {record.last_name}</span>
          ),
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },

        {
            title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
        },
        {
            title: 'Income',
          dataIndex: 'income',
          key: 'income',
        },

       

        {
            title: 'City',
          dataIndex: 'city',
          key: 'city',
        },


        {
            title: 'Car',
          dataIndex: 'car',
          key: 'car',
        },
        {
            title: 'Quote',
          dataIndex: 'quote',
          key: 'quote',
        },

        {
          title: 'Phone Price',
        dataIndex: 'phone_price',
        key: 'phone',
      }
        
      ];
  return (
    <div>
       <Table columns={columns} dataSource={data} />;
    </div>
  )
}

export default TableData
