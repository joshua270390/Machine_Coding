import { useState } from 'react';
import './App.css';
import Questions from './Components/Questions';
import Result from './Components/Result';
import question from './constant/data.json'

function App() {
  const[currQuestion, setCurrQuestion] = useState(0)
  const[useAnswer, setUseAnswer] = useState([])
  const[useAnswerText, setUseAnswerText] = useState([])

  const handleQuizQuestn = (isCorrect, text) => {
    setCurrQuestion(currQuestion + 1)
    setUseAnswer([...useAnswer, isCorrect])
    if(!isCorrect) setUseAnswerText([...useAnswerText, text])
  }

  const handleReset = () => {
    setCurrQuestion(0);
    setUseAnswer([])
  } 
  return (
    <div className="App quiz-app-max-width">
      <h1>Quiz App</h1>
      {currQuestion < question?.length &&
      <Questions question={question[currQuestion]} onAnswer={handleQuizQuestn}/>
      }
      {currQuestion == question?.length &&
      <Result reset={handleReset} useAnswerText={useAnswerText} useAnswer={useAnswer} questions={question}/>
      } 
      
    </div>
  );
}

export default App;
