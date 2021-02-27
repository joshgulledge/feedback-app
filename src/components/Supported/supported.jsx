import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

const Supported = function () {
   // see feeling component for details 
   const dispatch = useDispatch();
   const history = useHistory();
   const [input, setInput] = useState('');


  const saveSupportedInput = function (e) {
    setInput(e.target.value);
    // see feeling component for details 
    if (input > 0 && input < 6) {
    dispatch({
      type: 'SET_SUPPORTED_INPUT',
      payload: e.target.value
    }) // end dispatch
    }; // end if statement

  }; // end saveSupportedInput

  const nextClicked = function () {
    // see feeling component for details 
    if (input < 1 || input > 5) {
      alert('Please enter a number between 1 and 5');
      return; // return will leave function 
    };
    history.push('/comments')
  }; // end nextClicked


  return (
    <div>
      <p>How well were you supported today? 1 is Terrible and 5 is Fantastic</p>
      <input type="number" 
       placeholder="Enter a number" 
       onChange={saveSupportedInput}
      />
      <button onClick={nextClicked}>NEXT</button>
    </div>
  )
} // end Supported

export default Supported;