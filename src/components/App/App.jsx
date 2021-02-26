import React from 'react';
import axios from 'axios';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';


function App() {

  // allows us to send things to redux
  const dispatch = useDispatch();
  

  const saveFeelingInput = function (e) {
    // send the value to redux to handle
    dispatch({
      type: 'SET_FEELING_INPUT',
      payload: e.target.value
    }) // end dispatch

  }; // end saveFeelingInput

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
        <p>How are you feeling today? 1 is Terrible and 5 is Fantastic</p>
        <input type="number" 
        placeholder="Enter a number" 
        onChange={saveFeelingInput}
        />
    </div>
  );
}

export default App;
