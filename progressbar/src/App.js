import { useState, useEffect } from 'react';
import './App.css';
import Progressbar from './Component/Progressbar';

function App() {

  const[value, setValue] = useState(0)

  const progresshook = () => {
     setInterval(()=>{
        setValue((val)=>val + 1)
     },100)
  }

  useEffect(()=>{
    progresshook();
  },[])

  
  return (
    <div className='progress-outer'>
      <h3>Progress Bar</h3>
      <Progressbar value={value}/>
    </div>
  );
}

export default App;
