import React, { useEffect, useState } from 'react'
import { AddTodo } from '../components/AddTodo'
import { TodoItem } from '../components/TodoItem'
import './TodoList.css'
export const TodoList = () => {
    const [pendingList,setPendingLists] = useState([])
    const [completeList,setCompleteLists] = useState([])
    function addTodo(date,text)
    {
              
        const obj = {
            date:date,
            text:text,
            status: 'Not Done'
        }
        setPendingLists(prev => [...prev,obj])
    }
    function checkTodo(changeIndex)
    {
        
        setCompleteLists(prev => [...prev,{...pendingList[changeIndex],status:"Done"}])
        setPendingLists(prev => prev.filter((d,i) => i != changeIndex))
    }
    function deleteTodo(deleteIndex,type)
    {
        if(type == "Done")
        {
            setCompleteLists(prev=> prev.filter((_,i)=> i != deleteIndex))
        }
        else
        {
            setPendingLists(prev => prev.filter((_,i) => i != deleteIndex))
        }
    }
    return (
        <div className='todo-page'>
            <h1>Todo App</h1>
            <AddTodo addTodo={addTodo}/>
            <div className='todo-list'>
                <h1>Todo Pending</h1>
            {
                pendingList.length == 0 ? <p className='todo-empty'>No Pending Todo</p> :
                pendingList.map((data,index)=>{
                    return <TodoItem data={data} deleteItem={deleteTodo} key={`todoItem${index}`} index={index} checkTodo={checkTodo}/>
                })
            }

            <h1>Todo Completed</h1>
            {
                completeList.length == 0 ? <p className='todo-empty'>No Completed Todo</p> :
                completeList.map((data,index)=>{
                    return <TodoItem data={data} deleteItem={deleteTodo} key={`todoItem${index}`} index={index} checkTodo={checkTodo}/>
                })
            }
            </div>
        </div>
    )
}
