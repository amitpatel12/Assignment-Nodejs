import React, { useEffect, useState } from 'react'
import TableData from './TableData';

const Task1 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch('http://localhost:4000/users/task1');
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
    <h2>Task 1</h2>
      <h2>Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</h2>
      {
        data && <TableData data={data}/>
      }
      
    </>
  )
}

export default Task1
