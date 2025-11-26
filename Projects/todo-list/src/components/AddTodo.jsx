import React, { use, useState } from 'react'
import './AddTodo.css'
export const AddTodo = ({addTodo}) => {
    const [date,setDate] = useState()
    const [text,setText] = useState()
    return (
        <div className='add-todo'>
            <h3>Add Todo</h3>
            <div>
            <input type='date' value={date} onChange={(e)=>{
                setDate(e.target.value)
            }}></input>
            <input type='text' value={text} placeholder='todo' onChange={(e)=>{
                setText(e.target.value)
            }}></input>
            <button onClick={()=>{
                addTodo(date,text)
                setDate("")
                setText("")
            }}>Add</button>
            </div>
        </div>
    )
}
