import useTicTacToe from "../hook/use-tic-tac-toe";

function TicTacToe() {

    const{board, calculateWinner, handleClick, handleStatus, resetGame} = useTicTacToe()
  return (
    <div className="App board-ttt">
       <div className='status'>
        {handleStatus()}
        <button onClick={resetGame}>Reset</button>
       </div>
       <div className='board'>
        {board?.map((brd,i)=> <button onClick={()=>handleClick(i)} disabled={brd !== null} key={i}>{brd}</button>)}
       </div>
    </div>
  );
}

export default TicTacToe;
