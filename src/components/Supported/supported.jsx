import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const Supported = function () {
   const dispatch = useDispatch();
   const history = useHistory();

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
      <button onClick={() => history.push('/comments')}>NEXT</button>
    </div>
  )
} // end Supported

export default Supported;