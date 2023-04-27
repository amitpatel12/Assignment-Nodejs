import React, { useEffect, useState } from 'react'
import TableData from './TableData';

const Task3 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch('http://localhost:4000/users/task3');
                response = await response.json()
                if(response.success === true){
                    setData(response.result)
                }
            } catch (error) {
                console.log("something went wrong during Task1", error);
            }
            
        }
        getData()
    }, [])
  return (
    <>
    <h2>Task 3</h2>
      <h2>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name</h2>
      {
        data && <TableData data={data}/>
      }
      
    </>
  )
}

export default Task3
