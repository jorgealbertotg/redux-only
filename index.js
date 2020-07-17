const { createStore } = require('redux');

/* Initial state for reducer myReducer */
const initialState = {
  age: 21
};

/* Reducer myReducer */
const myReducer = (state = initialState, action) => {
  const newState = {...state};
  if (action.type === 'ADD') {
    newState.age += 1;
  }
  if (action.type === 'SUBSTRACT') {
    newState.age -= 1;
  }
  return newState;
};

/* Store */
const store = createStore(myReducer);

/* Dispatch ADD and SUBSCRIBE actions */
console.log('initial state' + JSON.stringify(store.getState()));
store.dispatch({type: 'ADD'});

console.log('after add' + JSON.stringify(store.getState()));
store.dispatch({type: 'SUBSTRACT'});

console.log('end state' + JSON.stringify(store.getState()));