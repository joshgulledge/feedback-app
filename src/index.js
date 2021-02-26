import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// bring in redux 
import {Provider} from "react-redux";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

// create the reducers, one per page
const feelingReducer = function (state = 0, action) {

  if(action.type === 'SET_FEELING_INPUT') return action.payload;

  return state;
} // end feelingReducer

const understandReducer = function (state = 0, action) {

  if (action.type === 'SET_UNDERSTAND_INPUT') return action.payload;
  
  return state;
} // end understandReducer

const supportedReducer = function (state = 0, action) {

  if(action.type === 'SET_SUPPORTED_INPUT') return action.payload;
  
  return state;
} // end supportedReducer

const commentsReducer = function (state = '', action) {
  return state;
} // end commentsReducer


// create the "store" for all the states
// combine to have multiple 
const storeInstance = createStore(combineReducers({
  feelingReducer,
  understandReducer,
  supportedReducer,
  commentsReducer
}), 
applyMiddleware(logger)
) // end storeInstance

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
