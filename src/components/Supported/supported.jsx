import {useDispatch} from 'react-redux';

const Supported = function () {

   // allows us to send things to redux
   const dispatch = useDispatch();

  const saveSupportedInput = function (e) {
    // send the value to redux to handle
    dispatch({
      type: 'SET_SUPPORTED_INPUT',
      payload: e.target.value
    }) // end dispatch
  }; // end saveSupportedInput


  return (
    <div>
      <p>How well were you supported today? 1 is Terrible and 5 is Fantastic</p>
      <input type="number" 
       placeholder="Enter a number" 
       onChange={saveSupportedInput}
      />
    </div>
  )
} // end Supported

export default Supported;