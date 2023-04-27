import React from 'react'
import { Space, Table, Tag } from 'antd';

const TableData2 = ({ data}) => {

    const columns = [
        {
            title: 'No',
            key: 'index',
            render: (text, record, index) => (
              <span>{index + 1}</span>
            ),
          },
        
        {
            title: 'City',
          dataIndex: 'city',
          key: 'city',
        },


        {
            title: 'Users',
          dataIndex: 'count',
          key: 'car',
        },
        
        {
            title: 'Average Income',
          dataIndex: 'avg_income',
          key: 'quote',
        }
        
      ];
  return (
    <div>
       <Table columns={columns} dataSource={data} />;
    </div>
  )
}

export default TableData2
