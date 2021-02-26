import {useHistory} from 'react-router-dom';

const Submit = function () {
  const history = useHistory();

  return (
    <div>
      <p>
        this is the submit page
      </p>
      <button onClick={() => history.push('/')}>Start Over</button>
    </div>
  )
};

export default Submit;