import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const Comments = function () {
  const history = useHistory();
  const dispatch = useDispatch();

  const saveCommentsInput = function (e) {
    // this can be left blank if desired
    dispatch({
      type: 'SET_COMMENTS_INPUT',
      payload: e.target.value
    }) // end dispatch
  }; // end saveCommentsInput

  // this will allow the user to go back
  const previous = function () {
    history.push('/understand');
  }; // end previous

  return (
    <div>
      <p>Do you have any comments?</p>

      {/* this allows the user to go back */}
      <button onClick={previous}>Previous</button>
      
      <input type="text" 
       placeholder="Enter your comment" 
       onChange={saveCommentsInput}
      />

      <button onClick={() => history.push('/submit')}>NEXT</button>
    </div>
  )
} // end Comments

export default Comments;