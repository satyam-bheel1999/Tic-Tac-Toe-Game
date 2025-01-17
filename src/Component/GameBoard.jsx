import React, { useState } from 'react'

function GameBoard() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [next, setNext] = useState(true);

    const handleClisk = (index) =>{
        const newBoard = board.slice();
        newBoard[index] = next? 'x' : 'y';

        setBoard(newBoard);
        console.log(board);
        setNext(!next);
    }

  return (
      <div>
          <div className='grid grid-cols-3 gap-1 w-40 h-48'>
              {
                  board.map((cell, index) => (
                      <button key={index} className='border border-black text-lg' onClick={handleClisk}>{cell}</button>))
              }

          </div>

      </div>
  )
}

export default GameBoard
