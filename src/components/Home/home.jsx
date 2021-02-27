import {useHistory} from 'react-router-dom';

const Home = function () {
  // this lets us use history to move around pages
  const history = useHistory();

  return (
    <div>
      <p>
        To begin the feedback application please press start. This will take about two minutes to complete.
      </p>
      {/* when button is clicked moves to next page */}
      <button onClick={(() => {history.push('/feeling')})}>START</button>
    </div>
  )
};

export default Home;