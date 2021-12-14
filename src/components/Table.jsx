import React, { useEffect } from 'react'
import TableCol from './TableCol'

function Table({dataTable}) {
  console.log('dataTable',dataTable)
  const dataShow=()=>{
    dataTable?.map(data=>
      {
        data.map((item,index)=>(
          <tr>
        <td>{item.proId}</td>
        <td>{item.userId}</td>
        <td>{item.days}</td>
      </tr>
        )
        )
      }
    )
}
  useEffect(()=>{
    dataShow()
  },[dataTable])
 
  const showTableData=dataTable?.map((data)=>{
    data.map(item=>(
      <tr>
    <td>{item.proId}</td>
    <td>{item.userId}</td>
    <td>{item.days}</td>
  </tr>
    ))
  })
  return (
    <table id="customers">
  <tr>
    <th>ProjectID</th>
    <th>UserID</th>
    <th>Total Time in Days </th>
  </tr>
 
 {dataTable&& dataTable.map(data=><TableCol data={data} key={data}/>)}
  
</table>
  )
}

export default Table
