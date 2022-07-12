import React from "react";
// import useState from "react";
// import axios from 'axios'
import "./table.css";






function Table() {


  const [board, setboard] = React.useState({
    '0': '-',
    '1': '-',
    '2': '-',
    '3': '-',
    '4': '-',
    '5': '-',
    '6': '-',
  });

  const [undo, setundo] = React.useState(null);

  const [winner, setwinner] = React.useState('No winner');

  const [turn, setturn] = React.useState('X');


  function handleEvent(e){
    if (board[e] === '-' && winner === 'No winner'){
        setundo(e);
        setboard(prevstate => ({...prevstate, [e]: 'X'}));
        setturn(turn === "O" ? "X" : "O");

    }
}

React.useEffect(() =>{
  if (board['0'] === board['1'] && board['1'] === board['2'] && board['2'] !== '-'){
      setwinner(board['0']);
      console.log(winner);
     
  }

}, [board]);









  return (
    <div>
        <div>{turn} turn!</div>

<div>{ winner && winner !== 'No winner' ? (`${winner} won!`):'No one won!'}    
</div>
      <table>
        <tbody>
          <tr>
          <td onClick={() =>{
                handleEvent(0);
              
                console.log(turn)
            }}> {board['0']} </td>
             <td onClick={() =>{
                handleEvent(1);
            }}> {board['1']} </td>
            <td onClick={() =>{
                handleEvent(2);
            }}> {board['2']} </td>
          </tr>
          <tr>
            <td onClick={() => {}}> 1 </td>
            <td onClick={() => {}}> 2 </td>
            <td onClick={() => {}}> 3 </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
