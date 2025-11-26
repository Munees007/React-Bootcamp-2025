import React, { useEffect, useState } from 'react'
import "./ScoreCard.css"
import {  BsEmojiDizzyFill, BsEmojiNeutralFill, BsEmojiSmileFill } from 'react-icons/bs'
import { FcRating } from 'react-icons/fc'
export const ScoreCard = ({ score, qLen }) => {
    const [icon,setIcon] = useState()
    const [text,setText] = useState()
    useEffect(()=>{
        function createIcon() {
            let first = Math.ceil(qLen / 2)
            let mid = Math.ceil(qLen / 4)
            let last = Math.ceil(qLen / 6)
            if (score >= first) {
                setIcon(<BsEmojiSmileFill size={80} style={{color:"#38b000"}}/>)
                setText("Champion mode activated!")
            }
            else if (score >= mid) {
                setIcon(<BsEmojiNeutralFill size={80} style={{color:"#fca311"}}/>)
                setText("You’re almost there!")
            }
            else {
                setIcon(<BsEmojiDizzyFill size={80} style={{color:"#c1292e"}}/>)
                setText("Don’t give up! You can do it!")
            }
        }
        createIcon()
    },[qLen])
    return (
        <div className='score-card'>
            <h2>SCORE</h2>
            <p>{text}</p>
            {icon}
            <div className='score'>
                <FcRating size={30}/>
                <p>{score}/{qLen}</p>
            </div>
        </div>
    )
}
