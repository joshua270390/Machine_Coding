import React, {useEffect, useState} from 'react'

const MemoryGame = () => {
  const[gridSize, setGridSize] = useState(4)
  const[moves, setMoves] = useState(0)
  const[movesByPlayer, setMovesByPlayer] = useState(0)
  const[cards, setCards] = useState([])
  const[flipped, setFlipped] = useState([])
  const[solved, setSolved] = useState([])
  const[won, setWon] =useState(false)
  const[disable, setDisable] =useState(false)
  const[gameOver, setGameOver] =useState(false)

  const handleGridSize  = (e) => {
    const size = parseInt(e.target.value);
    if(size >=2 && size <= 10 && size % 2 === 0){
        setGridSize(size)
    }
  }

  const handleMoves = (e) => {
    const moves = parseInt(e.target.value);
    if(moves >= 0){
        setMoves(moves)
    }
  }
  
  useEffect(()=>{
     if(solved.length === cards.length && cards.length> 0){
        setWon(true)
        setGameOver(true)
     } else if(moves > 0 && movesByPlayer >= moves){
        setGameOver(true)
     }
  }, [solved, cards, movesByPlayer, moves])

  const handleGameFunction = () => {
     const boardSize = gridSize * gridSize;
     const pairSize = Math.floor(boardSize / 2)
     const numbers = [...Array(pairSize).keys()].map((num)=>num+1)
     console.log(numbers)
     const shuffledCards = [...numbers, ...numbers].sort(()=>Math.random()-0.5).slice(0,boardSize).map((number,i)=>({id:i,number}))
     setCards(shuffledCards)
     setFlipped([])
     setSolved([])
     setMovesByPlayer(0)
     setWon(false)
     setGameOver(false)
  }

  useEffect(()=>{handleGameFunction()},[gridSize, moves])

  const checkMatch = (secondId) => {
       const [firstId] = flipped;
       if(cards[firstId].number === cards[secondId].number){
         setSolved([...solved, firstId, secondId]);
         setFlipped([])
         setDisable(false)
       } else {
          setTimeout(()=> {
            setFlipped([])
            setDisable(false)
          },1000)
       }
  }

  const handleCardClick = (id) => {
    if(disable || gameOver) return;
    
    if(flipped.length === 0){
     setFlipped([id])
     setMovesByPlayer(movesByPlayer + 1)
     return
    }

    if(flipped.length === 1){
      setDisable(true)
      if(id!==flipped[0]){
        setFlipped([...flipped, id])
        setMovesByPlayer(movesByPlayer + 1)
        checkMatch(id);
      } else {
        setFlipped([])
        setDisable(false)
      }
    }
  }

  //When the card is flipped

  const isFlipped =(id) => flipped.includes(id) || solved .includes(id);
  const isSolved =(id) => solved .includes(id);

  return (
    <div className='memory-game-grid'>
        <h1>Memory Game</h1>
        <div className='outer-grid-size-class' >
        <div className='grid-size-class'>
        <label>Grid Size:</label>
        <input type="number" min="2" max="10" step="2" value={gridSize} onChange={(e)=>handleGridSize(e)}/>
        </div>
        <div className='grid-size-class'>
        <label>Max Moves:</label>
        <span><input type="number" value={moves} onChange={(e)=>handleMoves(e)}/></span>
        </div>
        </div>
        <div className='moves-by-player'><label>Moves:</label> <span>{movesByPlayer} / {moves}</span></div>
        <div className='game-board' style={{display: "grid", gap:"5px", maxWidth: `min(${gridSize}*5.5rem)`, height: `min(${gridSize}*5.5rem)`, gridTemplateColumns: `repeat(${gridSize}, 1fr)`}}>
        {cards.map((card,i)=><div onClick={()=>handleCardClick(card.id)} className='card-dimension' style={{background: isSolved(card.id) ? "#04cb04" : isFlipped(card.id) ? "blue" : "#ccc", color: isFlipped(card.id) ? "#fff" : "#000" }} key={card.id}>{isFlipped(card.id) ? card.number : "?"}</div>)}
        </div>
        {gameOver &&<div className='result' style={{color: won ? "green" : "red"}}>{ won ? "You Won!" : "You Loss!" }</div>}
        <div className='playagain-reset-class'><button onClick={handleGameFunction}>{gameOver ? "Play Again" : "Reset"}</button></div>
    </div>
  )
}

export default MemoryGame