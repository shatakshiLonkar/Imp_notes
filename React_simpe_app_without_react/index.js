const { createStore }=require('redux');
const todoApp=require('./reducers');

const {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
  } =require( './actions');

  const store = createStore(todoApp.todoApp1);
    
  store.dispatch(addTodo('hi kirthi here'));

  // Log the initial state
  console.log(JSON.stringify(store.getState()))
  
  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  const subscribe = store.subscribe(() => console.log(store.getState()))
 
  // Dispatch some actions
 // store.dispatch(addTodo(5));
  store.dispatch(addTodo('Learn about reducers'));
  store.dispatch(addTodo('Learn about store'));
  store.dispatch(toggleTodo(0));
  store.dispatch(toggleTodo(1));
  //store.dispatch(toggleTodo());
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
  
  
  // Stop listening to state updates
  subscribe()