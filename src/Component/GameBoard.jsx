import React, { useState } from 'react'

function GameBoard() {

    const [board, setBoard] = useState(Array(9).fill(null));

    console.log(board);


  return (
      <div>
          <div className='grid grid-cols-3 gap-1 w-40 h-48'>
              {
                  board.map((cell, index) => (
                      <button className='border border-black'>{cell}</button>))
              }

          </div>

      </div>
  )
}

export default GameBoard
