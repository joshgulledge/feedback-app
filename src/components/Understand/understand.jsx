import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

// material Ui components
import Button from '@material-ui/core/Button';


// see feeling component for details 
const Understand = function () {
   const dispatch = useDispatch();
   const history = useHistory();
   const [input, setInput] = useState('');

  const nextClicked = function () {
    // see feeling component for details 

    if (input < 1 || input > 5) {
      alert('Please enter a number between 1 and 5');
      return; // return will leave function 
    }; // end if statement

    if(input > 0 && input < 6) {
      dispatch({
        type: 'SET_UNDERSTAND_INPUT',
        payload: input
      }) // end dispatch
    }; // end saveUnderstandInput

    history.push('/supported')
  }; // end nextClicked

  // this will allow the user to go back
  const previous = function () {
    history.push('/feeling');
  }; // end previous


  return (
    <div>
      <p>How well did you understand the material? 1 is Terrible and 5 is Fantastic</p>

    {/* this allows the user to go back */}
      <Button variant="contained" color="primary" onClick={previous}>Previous</Button>

      <input type="number" 
       placeholder="Enter a number" 
       onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={nextClicked}>NEXT</Button>
    </div>
  ) // end return
}; // end Understand

export default Understand;