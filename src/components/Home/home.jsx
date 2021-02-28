import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
// ^ From Material UI

const Home = function () {
  // this lets us use history to move around pages
  const history = useHistory();

  return (
    <div>
      <p>
        To begin the feedback application please press start. This will take about two minutes to complete.
      </p>
      {/* when button is clicked moves to next page */}
      <Button variant="contained" color="primary" onClick={(() => {history.push('/feeling')})}>START</Button>
    </div>
  )
};

export default Home;