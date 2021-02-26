import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const Feeling = function () {
  // this lets us use history to move around pages... will be in all pages
  const history = useHistory();

   // allows us to send things to redux...
  //  will be on all pages
   const dispatch = useDispatch();

  const saveFeelingInput = function (e) {
    // send the value to redux to handle
    dispatch({
      type: 'SET_FEELING_INPUT',
      payload: e.target.value
    }) // end dispatch

  }; // end saveFeelingInput


  return (
    <div>
      <p>How are you feeling today? 1 is Terrible and 5 is Fantastic</p>
      <input type="number" 
       placeholder="Enter a number" 
       onChange={saveFeelingInput}
      />
      {/* on click move to next page */}
      <button onClick={(() => {history.push('/understand')})}>Next</button>
    </div>
  )
} // end Feeling

export default Feeling;