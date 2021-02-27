import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const Feeling = function () {
  // this lets us use history to move around pages... will be in all pages
  const history = useHistory();

  // use a local state to validate input
  const [input, setInput] = useState('');
  // ^ a string because all inputs are strings

  // allows us to send things to redux...
  //  will be on all pages
   const dispatch = useDispatch();

  const nextClicked = function () {
    // validate the input before moving to next page
    if (input < 1 || input > 5) {
      alert('Please enter a number between 1 and 5');
      return; // return will leave function 
    };

    if (input > 0 && input < 6) {
      // send the value to redux to handle
      dispatch({
        type: 'SET_FEELING_INPUT',
        payload: input
      }) // end dispatch
    }; // end of if statement

    // if pass the check then move to next page
    history.push('/understand')
  }; // end nextClicked

  return (
    <div>
      <p>How are you feeling today? 1 is Terrible and 5 is Fantastic</p>

      <input type="number" 
       placeholder="Enter a number" 
       onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={nextClicked}>Next</button>
      
    </div>
  ) // end of what to return
}; // end Feeling

export default Feeling;