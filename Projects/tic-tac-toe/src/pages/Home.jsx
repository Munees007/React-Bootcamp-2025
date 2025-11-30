import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate()
    const rules = [
        "The game is played on a 3×3 grid.",
        "One player is X, the other is O.",
        "X goes first, then players take turns.",
        "On your turn, place your symbol in any empty square.",
        "Try to get three of your symbols in a row — horizontally, vertically, or diagonally.",
        "You cannot place a symbol in a square that’s already taken.",
        "If all squares are filled and no one has three in a row, the game ends in a draw.",
        "The game can be restarted after a win or a draw."
    ];

    return (
        <div className='bg-[#264653] text-white gap-5 h-screen flex flex-col items-center justify-between p-5'>
            <title>Home - Tic Tac Toe</title>
            <div className=''>
                <p className='text-center text-3xl font-bold uppercase tracking-wider'>Tic Tac Toe</p>
                <p className='text-center text-xl mx-10'>Tic Tac Toe is a simple and strategic two-player game played on a 3x3 grid. Players take turns marking the spaces with their symbols — X or O. The goal is to be the first to place three of your marks in a row — horizontally, vertically, or diagonally. Although the game is quick to play, it requires smart moves and anticipation of the opponent’s strategy.</p>
            </div>
            <div className='bg-[#2a9d8f] rounded-md p-5 text-black'>
                <p className='text-xl font-bold'>Rules</p>
                {
                    rules.map((value, index) => {
                        return <p className='ml-5 bg-[#e9c46a] py-1 px-2 hover:bg-[#f4a261] rounded-md font-semibold mt-2 cursor-pointer hover:scale-[1.02]'>{index + 1}. {value}</p>
                    })
                }
            </div>
            <button onClick={()=>{
                navigate("/tictactoe")
            }} className='bg-[#e76f51] cursor-pointer text-black font-bold w-36 h-10 rounded-md hover:scale-105 active:scale-95'>START</button>
        </div>
    )
}
