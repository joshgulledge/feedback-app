import React, {useState} from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [feelingInput, setFeelingInput] = useState('');

  const saveFeelingInput = function (e) {
    console.log('target value: ', e.target.value);
    setFeelingInput(e.target.value);
    console.log('feeling input is: ', feelingInput);
  }; // end saveFeelingInput

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
        <p>How are you feeling today? 1 is Terrible and 5 is Fantastic</p>
        <input type="number" 
        value={feelingInput} 
        placeholder="Enter a number" 
        onChange={saveFeelingInput}
        />
    </div>
  );
}

export default App;
