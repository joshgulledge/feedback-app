import {useDispatch} from 'react-redux';

const Understand = function () {

   // allows us to send things to redux
   const dispatch = useDispatch();

  const saveUnderstandInput = function (e) {
    // send the value to redux to handle
    dispatch({
      type: 'SET_UNDERSTAND_INPUT',
      payload: e.target.value
    }) // end dispatch
  }; // end saveUnderstandInput


  return (
    <div>
      <p>How well did you understand the material? 1 is Terrible and 5 is Fantastic</p>
      <input type="number" 
       placeholder="Enter a number" 
       onChange={saveUnderstandInput}
      />
    </div>
  )
} // end Understand

export default Understand;