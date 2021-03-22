import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [ islit , setlit ] = useState(true);

    const lightOn = () => setlit(true);
    const lightOff = () => setlit(false);

    return (
    <div className={(islit? "lit":"dark")}>
      <button className='but1' onClick = {lightOn} > Turn On </button>
      <button className='but2' onClick = {lightOff} > Turn Off </button>
    </div>
  );
}

export default Room;
