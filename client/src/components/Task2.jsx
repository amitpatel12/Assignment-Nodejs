import React, { useEffect, useState } from 'react'
import TableData from './TableData';

const Task2 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch('http://localhost:4000/users/task2');
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
    <h2>Task 2</h2>
      <h2>Male Users which have phone price greater than 10,000</h2>
      {
        data && <TableData data={data}/>
      }
      
    </>
  )
}

export default Task2
