import React,{useState, useEffect} from 'react'

const Progressbar = ({value}) => {

    const[percentage, setPercentage] = useState(0)

    useEffect(()=>{
        setPercentage(Math.min(100, Math.max(value,0)))
    },[value])

  return (
    <>
    <div className='progress-bar' role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={`${percentage}`}><span style={{color: percentage > 49 ? "white" : "black"}}>{percentage}%</span><div style={{width: `${percentage}%`, height: "100%"}}></div></div>
    <div className='status-bottom'>{percentage === 100 ? "Completed!" : "Loading..."}</div>
    </>
  )
}

export default Progressbar