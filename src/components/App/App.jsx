import React from 'react';
import axios from 'axios';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import Feeling from '../Feeling/feeling';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


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
        <Route path='/'>
          <Feeling />
        </Route>

      </Router>
    </div>
  );
}

export default App;
