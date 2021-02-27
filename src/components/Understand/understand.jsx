import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

// see feeling component for details 
const Understand = function () {
   const dispatch = useDispatch();
   const history = useHistory();
   const [input, setInput] = useState('');

  const saveUnderstandInput = function (e) {
    setInput(e.target.value);

    // see feeling component for details 
    if(input > 0 && input < 6) {
      dispatch({
        type: 'SET_UNDERSTAND_INPUT',
        payload: e.target.value
      }) // end dispatch
    }; // end saveUnderstandInput
  }; // end if statement

  const nextClicked = function () {
        // see feeling component for details 
    if (input < 1 || input > 5) {
      alert('Please enter a number between 1 and 5');
      return; // return will leave function 
    };
    history.push('/supported')
  }; // end nextClicked


  return (
    <div>
      <p>How well did you understand the material? 1 is Terrible and 5 is Fantastic</p>
      <input type="number" 
       placeholder="Enter a number" 
       onChange={saveUnderstandInput}
      />
      <button onClick={nextClicked}>NEXT</button>
    </div>
  ) // end return
}; // end Understand

export default Understand;