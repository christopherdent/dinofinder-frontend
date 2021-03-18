import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import dinosaursReducer from './reducers/dinosaursReducer'
import erasReducer from './reducers/erasReducer'
import dinoTypesReducer from './reducers/dinoTypesReducer'
import { combineReducers } from "redux";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';



const rootReducer = combineReducers({
  eras: erasReducer, //this causes the unwanted nesting.
  dinotypes: dinoTypesReducer,
  dinosaurs: dinosaursReducer
})

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  
    <Provider store = { store }>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
