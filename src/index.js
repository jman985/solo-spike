import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// Making reducers ...
const clickOne = (state={ count: 0 }, action) => {
  console.log('Click one reducer', action);
  if ( action.type === 'CLICK_ONE' ) {
    return { count: state.count + 1 };
  }
  return state;
}

const clickTwo = (state={ count: 0 }, action) => {
  console.log('Click two reducer', action);
  if ( action.type === 'CLICK_TWO' ) {
    return { count: state.count + 1 };
  }
  return state;
}

const nameList = ( state=[], action) => {
  if (action.type === 'ADD_NAME') {
    //update state to add the name to the list 
    return [ ...state, action.payload ]
  }
  return state;
}

// Create the Redux store - place to keep our shared data
// All reducers run each time an action is dispatched
const storeInstance = createStore( 
  combineReducers( {
    clickOne, 
    clickTwo,
    nameList
  } ),
  applyMiddleware( logger )
)

// Use the Provider to share the Redux store with the App
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
