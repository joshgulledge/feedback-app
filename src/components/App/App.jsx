import React from 'react';
import axios from 'axios';
import './App.css';
// import {useDispatch, useSelector} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/feeling';
import Understand from '../Understand/understand';
import Supported from '../Supported/supported';



function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* make the different routes here */}
      <Router>
      {/* home starts at feelings feedback */}
        <Route path='/feeling' exact>
          <Feeling />
        </Route>

        <Route path='/understand' exact>
          <Understand />
        </Route>

        <Route path='/supported' exact>
          <Supported />
        </Route>

      </Router>
    </div>
  );
}

export default App;
