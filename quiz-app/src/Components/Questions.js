import React from 'react'

const Questions = ({question, onAnswer}) => {
  return (
    <div className='question-answer-outer'>
       <h3>{question.question}</h3>
       <ul>
       {question.answerOptions?.map((opt)=><li key={opt.text}><button onClick={()=> onAnswer(opt.isCorrect, opt.text)}>{opt.text}</button></li>)}
       </ul>
    </div>
  )
}

export default Questions