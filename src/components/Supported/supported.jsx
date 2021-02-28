import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

const Supported = function () {
   // see feeling component for details 
   const dispatch = useDispatch();
   const history = useHistory();
   const [input, setInput] = useState('');

  const nextClicked = function () {
    // see feeling component for details 
    if (input < 1 || input > 5) {
      alert('Please enter a number between 1 and 5');
      return; // return will leave function 
    }; // end if statement

    if (input > 0 && input < 6) {
      dispatch({
        type: 'SET_SUPPORTED_INPUT',
        payload: input
      }); // end dispatch
      }; // end if statement

    history.push('/comments')
  }; // end nextClicked

  // this will allow the user to go back
  const previous = function () {
    history.push('/understand');
  }; // end previous


  return (
    <div>
      <p>How well were you supported today? 1 is Terrible and 5 is Fantastic</p>

      {/* this allows the user to go back */}
      <button onClick={previous}>Previous</button>

      <input type="number" 
       placeholder="Enter a number" 
       onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={nextClicked}>NEXT</button>
    </div>
  )
} // end Supported

export default Supported;