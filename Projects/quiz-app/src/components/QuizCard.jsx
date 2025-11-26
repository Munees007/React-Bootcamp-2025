import React from 'react'
import "./QuizCard.css"
import { FcQuestions } from 'react-icons/fc'
export const QuizCard = ({question,options,answer,changeNextQuestion,index}) => {
  return (
    <div className='quiz-card'>
        <div className='quiz-top'>
            <FcQuestions size={25} className='quiz-icon'/>
            <p>Question {index+1}</p>
        </div>
        <h3>{question}</h3>
        <div className='options'>
        {
            options.map((value)=>{
                return <button onClick={()=>{
                    changeNextQuestion(value == answer)
                }}>{value}</button>
            })
        }
        </div>
    </div>
  )
}
