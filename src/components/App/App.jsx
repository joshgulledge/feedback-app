import React from 'react';
import axios from 'axios';
import './App.css';
// import {useDispatch, useSelector} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

// import the components
import Feeling from '../Feeling/feeling';
import Understand from '../Understand/understand';
import Supported from '../Supported/supported';
import Comments from '../Comments/comments';
import Home from '../Home/home';
import Submit from '../Submit/submit';
import Admin from '../Admin/admin';



function App() {

  return (
    // Keep the header in all pages
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* make the different routes here */}
      <Router>
      {/* home leads to feelings then continue moving with submit */}

      <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/feeling' exact>
          <Feeling />
        </Route>

        <Route path='/understand' exact>
          <Understand />
        </Route>

        <Route path='/supported' exact>
          <Supported />
        </Route>

        <Route path='/comments' exact>
          <Comments />
        </Route>

        <Route path='/submit' exact>
          <Submit />
        </Route>

  {/* 'secret' page. no path goes here, must be typed in the url manually  */}
        <Route path='/admin' exact>
          <Admin />
        </Route>

      </Router>
    </div>
  );
}; 

export default App;
