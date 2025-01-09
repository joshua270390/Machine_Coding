import { useState } from 'react';
import './App.css';

const Cell = ({filled, onClick, isDisabled, label}) => {
   return <button aria-label={label} type="button" disabled={isDisabled} onClick={onClick} className={filled ? "cell cell-activated":"cell"} />
    }

function App() {

  const [order, setOrder] = useState([])
  const [deActivate, setDeActivate] = useState(false)

  const boxes = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  const deactiveCell = () => {
    setDeActivate(true)
    const timer = setInterval(()=>{
       setOrder((orginalOrder)=> {
          const newOrder = orginalOrder.slice()
          newOrder.pop()

          if(newOrder.length === 0){
            clearInterval(timer)
            setDeActivate(false)
          }
          return newOrder
        } 
      )
    },500)
  }

  const activeCell = (index) => {
    const newOrder = [...order, index]
    setOrder(newOrder)
    console.log("order",newOrder)
    if (newOrder.length === boxes.flat(1).filter(Boolean).length){
      deactiveCell()
    }
  }
  

  return (
    <div className="App">
      <div className='cell-wrapper-grid'>
       <div className='cell-wrapper-grid-inner' style={{ gridTemplateColumns: `repeat(${boxes[0].length}, 1fr)`}}>
         {boxes.flat(1).map((value,index)=> (value ? <Cell label={`Cell ${index}`} isDisabled={order.includes(index) || deActivate} filled={order.includes(index)} key={index} onClick={()=>activeCell(index)}/>:<span/>))}
       </div>
      </div>
    </div>
  );
}

export default App;
