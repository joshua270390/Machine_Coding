import useTicTacToe from "../hook/use-tic-tac-toe";

function TicTacToe({boardSize = 3}) {

    const{board, handleClick, handleStatus, resetGame} = useTicTacToe(boardSize)
  return (
    <div className="App board-ttt" style={{"--board-size": boardSize}}>
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
