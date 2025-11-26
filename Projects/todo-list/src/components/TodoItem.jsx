import React from 'react'
import { MdDelete } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import './TodoItem.css'
export const TodoItem = ({data,checkTodo,index,deleteItem}) => {
    return (
        <div className='todo-item' style={{backgroundColor: data.status == "Done" ? "#034732" : "#fca311",color:data.status == "Done" ? "white" : "black"}}>
            <div className='data'>
            <p>{data.date}</p>
            <p>{data.text}</p>
            </div>
            <div className='actions'>
                {data.status == "Not Done" &&
                <TiTick size={40} style={{color:"#034732"}} onClick={()=>{
                    checkTodo(index)
                }}/>}
                <MdDelete size={40} onClick={()=>{
                    deleteItem(index,data.status)
                }} style={{color:"#c1292e"}}/>
            </div>
        </div>
    )
}
