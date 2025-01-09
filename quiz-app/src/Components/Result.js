import React from 'react'

const Result = ({reset, useAnswer,questions, useAnswerText}) => {
  
    const correctAnswer = useAnswer?.filter(answer => answer).length

    const correctNewAnswer = useAnswerText?.filter(answer => answer);

    console.log(correctNewAnswer)

  return (
    <>
        <div className='result-head'>Result</div>
        <span className='result'>You have have answered {correctAnswer} out of {questions.length} questions</span>
        <button onClick={reset}>Reset Question</button>
        <div className='final-results'>
        {questions?.map((ques,index)=> (
            <div data-correct={useAnswer[index]} className='final-result-highlight' key={index}> 
                
                  Q{index + 1}. {ques.question}
                
                {/* {useAnswer[index] === false && (
                  <div>
                    {correctNewAnswer?.map((wrongans, i) => (
                      <span key={i}>{wrongans}</span>
                    ))}
                  </div>
                )} */}
            </div> 
        )
        )}
        </div>
    </>

  )
}

export default Result