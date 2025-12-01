import React, { useEffect, useState } from 'react'
import { Cell } from '../components/Cell'
import { toast } from 'react-toastify'

export const TicTacToe = () => {
    const [data,setData] =  useState(Array(9).fill(""))
    const [currentPlayer,setCurrentPlayer] = useState("O")
    const handleClick = (index) =>{
        setData(prev => {
            let temp = [...prev]
            temp[index] = currentPlayer
            return temp
        })
        
    }
    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]]
    useEffect(()=>{
        const checkGameover = () =>{
            const temp = data.filter((d)=> d!="")
            return temp.length == 9
        }
        const reset = () =>{
                
                setData(Array(9).fill(""))
                setCurrentPlayer("O")
        }
        const checkWin = ()=>{
            
            winConditions.forEach((value)=>{
                
                const temp = value.filter((d)=> data[d] == currentPlayer)
                console.log(temp)
                if(temp.length == 3)
                {
                    toast.success(`Winner: ${currentPlayer}`)
                    reset()
                    return
                }
            })
            let player = currentPlayer == "X" ? "O" : "X"
            setCurrentPlayer(player)
            if(checkGameover())
            {
                toast.info("GameOver, Draw")
                reset()
            }
        }
        checkWin()
        
    },[data])
    return (
        <div className='bg-[#264653] w-full h-screen flex flex-col items-center gap-3'>
            <title>Tic Tac Toe - Game</title>
            <p className='text-4xl text-white '>Tic Tac Toe</p>
            <div className='grid grid-cols-3 w-fit gap-3 bg-[#2a9d8f] p-5 rounded-md'> 
            {
                data.map((value,i)=> <Cell key={i} index={i} value={value} handleClick={handleClick}/>)
            }

            <p className='text-2xl text-center text-white font-bold col-span-3'>Player: {currentPlayer}</p>
            </div>
        </div>
    )
}
