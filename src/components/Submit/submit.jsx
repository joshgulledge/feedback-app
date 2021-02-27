import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';

const Submit = function () {
  const history = useHistory();

  // this gives us all the values entered.
  // i did one per page
  const feeling = useSelector(store => store.feelingReducer);
  const understanding = useSelector(store => store.understandReducer);
  const support = useSelector(store => store.supportedReducer);
  const comments = useSelector(store => store.commentsReducer);
  

  const submitInfo = function () {
    // send info to the database
    axios({
      method: 'POST',
      url: '/addFeedback',
      data: {
        feeling,
        understanding,
        support,
        comments
      }
    }); // end axios call
    
    // go back to home page
    history.push('/');
  }

  return (
    <div>
      {/* Show a preview of responses */}
      <p>
        Your answers were:
      </p>

      <p>For how you are feeling: {feeling}</p>

      <p>For how well you are understanding: {understanding}</p>

      <p>For how supported you feel: {support}</p>

      {comments ? <p>You made the extra comment: {comments} </p> : <p> Thank You for your feedback</p> }

      <button onClick={submitInfo}>Finalize Info</button>
    </div>
  )
};

export default Submit;