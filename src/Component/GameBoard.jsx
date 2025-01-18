import React, { useState } from 'react'

function GameBoard() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [next, setNext] = useState(true);

    const handleClisk = (index) =>{
        const newBoard = board.slice();
        newBoard[index] = next? 'X' : 'O';
        setBoard(newBoard);
        console.log(board);
        setNext(!next);
    }

  return (
      <div>
          <div className='grid grid-cols-3 gap-1 w-40 h-48'>
              {
                  board.map((cell, index) => (
                      <button key={index} className='border border-black w-16 h-16 cursor-pointer text-lg' onClick={() => handleClisk(index)}>{cell}</button>))
              }

          </div>

      </div>
  )
}

export default GameBoard
