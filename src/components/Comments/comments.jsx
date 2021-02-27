import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const Comments = function () {
  const history = useHistory();
  const dispatch = useDispatch();

  const saveCommentsInput = function (e) {
    // send the value to redux to handle
    dispatch({
      type: 'SET_COMMENTS_INPUT',
      payload: e.target.value
    }) // end dispatch
  }; // end saveCommentsInput


  return (
    <div>
      <p>Do you have any comments?</p>
      <input type="text" 
       placeholder="Enter your comment" 
       onChange={saveCommentsInput}
      />
      <button onClick={() => history.push('/submit')}>NEXT</button>
    </div>
  )
} // end Comments

export default Comments;