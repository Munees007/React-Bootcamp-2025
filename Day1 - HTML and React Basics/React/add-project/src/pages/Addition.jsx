import React from 'react'
import { useState } from 'react'
import "./Addition.css"
export const Addition = () => {
    const [data,setData] = useState({num1:0,num2:0,res:0})
  return (
    <div className='box'>
        <input type='text' onChange={(e)=> {
            setData(prev => {
                return {...prev,num1:e.target.value}
            })
        }}/>
        <input type='text' onChange={(e)=>{
            setData({...data,num2:e.target.value})
        }}/>
        <p>Result: {data.res ?? "?"}</p>
        <button onClick={()=>{
            setData(prev => {
                let n1 = parseInt(prev.num1)
                let n2 = parseInt(prev.num2)

                return {...prev,res:n1+n2}
            })
            
        }}>Add</button>
    </div>
  )
}
