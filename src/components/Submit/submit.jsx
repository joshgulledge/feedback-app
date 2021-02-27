import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Submit = function () {
  const history = useHistory();

  // this gives us all the values entered.
  // i did one per page
  const feeling = useSelector(store => store.feelingReducer);
  const understand = useSelector(store => store.understandReducer);
  const supported = useSelector(store => store.supportedReducer);
  const comments = useSelector(store => store.commentsReducer);
  

  const submitInfo = function () {

    
    // go back to home page
    history.push('/');
  }

  return (
    <div>
      <p>
        this is the submit page
      </p>
      <button onClick={submitInfo}>Finalize Info</button>
    </div>
  )
};

export default Submit;