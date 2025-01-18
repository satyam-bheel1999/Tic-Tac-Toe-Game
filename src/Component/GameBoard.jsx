import React, { useState } from 'react'

function GameBoard() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [next, setNext] = useState(true);

    let winner = findWinner(board)

    const handleClisk = (index) =>{

        

        if(board[index] || winner) return;

        const newBoard = board.slice();
        newBoard[index] = next? 'X' : 'O';
        setBoard(newBoard);
        setNext(!next);
    }

    const handleRestart = () =>{

        setBoard(Array(9).fill(null));

        setNext(true);

        

    }

  return (
      <div className='flex flex-col border border-red-400 h-screen w-screen justify-center items-center'>
          <div className='grid grid-cols-3 gap-1 w-40 h-48 absolute top-40'>
              {
                  board.map((cell, index) => (
                      <button key={index} className='border border-yellow-500 cursor-pointer text-lg' onClick={() => handleClisk(index)}>{cell}</button>))
              }

          </div>
          <div className='absolute top-24 text-3xl text-blue-600 font-semibold'>
            {winner ? (
                <h1 className='text-green-500'>"Winner" : {winner}</h1>
            ):(
                <h1>"Next Player": {next ? "X" : "O"}</h1>
            )}
          </div>

          <div>
            <button onClick={handleRestart} className='h-14 w-64 border border-yellow-500 text-xl'>Restart The Game</button>
          </div>


      </div>
  )
}

let findWinner = (board) => {

    let lines = [ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let line of lines){
        let [a,b,c] = line;
        
        if(board[a] && board[a] === board[b] && board[b] === board[c]){
            return board[a];
        }
    }

    return null;


};

export default GameBoard
