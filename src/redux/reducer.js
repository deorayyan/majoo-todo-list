const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TODO_LIST':
      return {
        ...state,
        todos: action.payload
      }
    case 'ADD_TASK':
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    case 'GET_TASK':
      return {
        ...state,
        slideOverOpened: true,
        taskDetail: action.data
      }
    case 'UPDATE_TASK':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.data.id ? action.data : todo;
        })
      }
    case 'DELETE_TASK':
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id
        })
      }
    case 'OPEN_SLIDEOVER':
      return {
        ...state,
        slideOverOpened: true,
      }
    case 'CLOSE_SLIDEOVER':
      return {
        ...state,
        slideOverOpened: false,
      }
    case 'OPEN_MODAL':
      return {
        ...state,
        currentTaskId: action.id,
        modalOpened: true,
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalOpened: false,
      }
    default:
      return state;
  }
}

export default reducer;