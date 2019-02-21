const { combineReducers } = require('redux');
const {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} = require('./actions');
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state =[], action) {
  switch (action.type) {
    case ADD_TODO:
    console.log("........aaaaaaaa............")
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
     
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
    console.log("I am at default")
      return state
  }
  console.log(store.getState())
}

const todoApp1 = combineReducers({
  visibilityFilter,
  todos
})
exports.todoApp1 = todoApp1;

