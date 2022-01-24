import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer, {
  todos: [],
  slideOverOpened: false,
  modalOpened: false,
  taskDetail: {},
  currentTaskId: null,
})

export default store;