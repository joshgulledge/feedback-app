import {useDispatch} from 'react-redux';

const Feeling = function () {

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
    <div>
      <p>How are you feeling today? 1 is Terrible and 5 is Fantastic</p>
      <input type="number" 
       placeholder="Enter a number" 
       onChange={saveFeelingInput}
      />
    </div>
  )
} // end Feeling

export default Feeling;