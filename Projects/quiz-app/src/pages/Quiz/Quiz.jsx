import React, { useEffect, useState } from 'react'
import "./Quiz.css"
import questions from "../../utils/questions.json"
import { QuizCard } from '../../components/QuizCard'
import { ScoreCard } from '../../components/ScoreCard'
export const Quiz = () => {
    const [index,setIndex] = useState(0)
    const [score,setScore] = useState(0)
    function changeQuestion(isCorrect)
    {
        if(isCorrect)
        {
            setScore(score + 1)
        }
        setIndex(index + 1)
    }
    return (
        <div className="quiz_page ">
            <h1>Quiz App</h1>
            {
                index < questions.length ? 
                <QuizCard index={index} question={questions[index].question} answer={questions[index].answer} 
                    options={questions[index].options} changeNextQuestion={changeQuestion}/> : 
                <ScoreCard score={score} qLen={questions.length}/>
            }
        </div>
    )
}
