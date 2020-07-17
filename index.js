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

/* Adding subscription */
store.subscribe(() => {
  console.log('state changed' + JSON.stringify(store.getState()));
});

/* Dispatch ADD and SUBSCRIBE actions */
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'SUBSTRACT'});