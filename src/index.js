import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  salary: 15000,
  value:[],
}

const userState = {
  name: 'Male',
  age: 20
}

const userReducer = (state=userState,action) => {
  switch (action.type) {
    case 'setName':
      state = {
        ...state,
        name : action.payload,
      }
    break;
    case 'setAge':
      state = {
        ...state,
        age : action.payload,
      }
      // state -= action.payload;
    break;
    default:
  }
  return state;
}

const salaryReducer = (state=initialState,action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        salary : state.salary += action.payload,
        value: [...state.value,action.payload],
      }
    break;
    case 'SUB':
      state = {
        ...state,
        salary : state.salary -= action.payload,
        value: [...state.value,-action.payload],
      }
      // state -= action.payload;
    break;
    default:
  }
  return state;
}

const myLogger=(store)=>(next)=>(action)=>{
  console.log('Log Action : ',action);
  next(action);
}
const store = createStore(combineReducers({salary: salaryReducer,user: userReducer}),{},applyMiddleware(myLogger));

store.subscribe(()=>{
  console.log('Update Store : ',store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);