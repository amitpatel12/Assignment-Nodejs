import React, { useEffect, useState } from 'react'

import TableData2 from './TableData2';

const Task5 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch('http://localhost:4000/users/task5');
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
    
    <h2>Task 5</h2>
      <h3>Show the data of top 10 cities which have the highest number of users and their average income</h3>
      {
        data && <TableData2 data={data}/>
      }
      
    </>
  )
}

export default Task5
