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


  function handleEvent(e){
    setboard(prevstate => ({...prevstate, [e]: 'O'}));
    if (board[e] === 'O') {
      setboard(prevstate => ({...prevstate, [e]: 'X'}))
    }
}


  return (
    <div>
      <table>
        <tbody>
          <tr>
          <td onClick={() =>{
                handleEvent(0);
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