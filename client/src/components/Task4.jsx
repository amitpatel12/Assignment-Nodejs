import React, { useEffect, useState } from 'react'
import TableData from './TableData';

const Task4 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch('http://localhost:4000/users/task4');
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
    
    <h2>Task 4</h2>
      <h3>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit</h3>
      {
        data && <TableData data={data}/>
      }
      
    </>
  )
}

export default Task4
