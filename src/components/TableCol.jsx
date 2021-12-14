import React from 'react'

export default function TableCol({data}) {
  return (
    <>
    {
      data.map((item,index)=>(
        <tr>
      <td className={index>1&&'bg-red'}>{item.proId}</td>
      <td className={index>1&&'bg-red'}>{item.userId}</td>
      <td className={index>1&&'bg-red'}>{item.days}</td>
    </tr>
      )
      )
    }
    </>
  )
}
