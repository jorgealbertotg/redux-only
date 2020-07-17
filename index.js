const { createStore } = require('redux');

/* Initial state for reducer myReducer */
const initialState = {
  age: 21
};

/* Reducer myReducer */
const myReducer = (state = initialState, action) => {
  const newState = {...state};
  if (action.type === 'ADD') {
    newState.age += action.val;
  }
  if (action.type === 'SUBSTRACT') {
    newState.age -= action.val;
  }
  return newState;
};

/* Store */
const store = createStore(myReducer);

/* Adding subscription */
store.subscribe(() => {
  console.log('state changed' + JSON.stringify(store.getState()));
});

/* Dispatch ADD and SUBSCRIBE actions */
store.dispatch({type: 'ADD', val: 10});

store.dispatch({type: 'SUBSTRACT', val: 5});