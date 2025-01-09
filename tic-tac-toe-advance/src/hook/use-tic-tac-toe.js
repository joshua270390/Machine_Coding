import React, { useState } from 'react';

const BoardSize = (size) => Array(size*size).fill(null);

const useTicTacToe = (boardSize) => {

    const[board,setBoard] = useState(BoardSize(boardSize))
    const[isXNext, setIsXNext] = useState(true)

    const dynamicWinningPattern = () => {
        const pattern = []

        for (let i = 0; i < boardSize; i++){
            const horizontalPattern = [];
            const verticalPattern = []
            for (let j = 0; j < boardSize; j++){
               horizontalPattern.push(i * boardSize + j)
               verticalPattern.push(j * boardSize + i)
            }   
            pattern.push(horizontalPattern, verticalPattern)
        }

       

        
            const diagonalPat1 = [];
            const diagonalPat2 = []
            for (let i = 0; i < boardSize; i++){
                diagonalPat1.push(i * (boardSize + 1))
                diagonalPat2.push((i+1) * (boardSize - 1))
            }   

        pattern.push(diagonalPat1, diagonalPat2)

        return pattern


    }
    
    const WINNING_PATTERN = dynamicWinningPattern();

    const calculateWinner = (currentBoard) =>{
       for(let i = 0; i < WINNING_PATTERN.length; i++){
        //   const[a,b,c] = WINNING_PATTERN[i]
        const pattern = WINNING_PATTERN[i]

        let countX = 0;
        let countO = 0;

        for(let j=0; j < pattern.length; j++){
            const cell = currentBoard[pattern[j]];
            if(cell === "X"){
                countX++
            } else if (cell === "O"){
                countO++
            }
        }

        if(countX === boardSize) return "X"
        if(countO === boardSize) return "O"

        //   if(currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]){
        //     return currentBoard[a]
        //  }
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
        setBoard(BoardSize(boardSize))
        setIsXNext(true)
    }

    return {board, calculateWinner, handleClick, handleStatus, resetGame}
    
}

export default useTicTacToe