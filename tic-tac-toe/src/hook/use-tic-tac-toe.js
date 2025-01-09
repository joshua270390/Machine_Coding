import React, { useState } from 'react';

const BoardSize = () => Array(9).fill(null);

const useTicTacToe = () => {

    const[board,setBoard] = useState(BoardSize())
    const[isXNext, setIsXNext] = useState(true)
    
    const WINNING_PATTERN = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6]
    ];

    const calculateWinner = (currentBoard) =>{
       for(let i = 0; i < WINNING_PATTERN.length; i++){
          const[a,b,c] = WINNING_PATTERN[i]

          if(currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]){
            return currentBoard[a]
         }
       }

       return null
    }

    const handleClick = (i) =>{
        const winner = calculateWinner(board)
        // check the winner or something else inside the cell
        if(winner || board[i]) return;

        const newBoard = [...board]

        newBoard[i] = isXNext ? "X" : "O"

        setBoard(newBoard)
        setIsXNext(!isXNext)
    }

    const handleStatus = () =>{
        const winner = calculateWinner(board)

        if(winner) return `Player ${winner} Wins`;
        if(!board?.includes(null)) return `Match Draw`;
        return `Player ${isXNext ? "X" : "O"} turn`;
    }

    const resetGame = () =>{
        setBoard(BoardSize())
        setIsXNext(true)
    }

    return {board, calculateWinner, handleClick, handleStatus, resetGame}
    
}

export default useTicTacToe