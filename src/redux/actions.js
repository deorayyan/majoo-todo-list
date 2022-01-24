import store from './store';

const actions = {
  updateTodoList(payload) {
    return {
      type: 'UPDATE_TODO_LIST',
      payload
    }
  },
  addTask(payload) {
    return {
      type: 'ADD_TASK',
      payload
    }
  },
  getTask(payload) {
    const task = store.getState().todos.find((task) => task.id === payload);

    return {
      type: 'GET_TASK',
      data: task
    }
  },
  updateTask(payload) {
    console.log(payload);
    const newTodos = [];
    return {
      type: 'UPDATE_TASK',
      data: payload
    }
  },
  deleteTask(payload) {
    return {
      type: 'DELETE_TASK',
      id: payload
    }
  },
  openSlideOver() {
    return {
      type: 'OPEN_SLIDEOVER'
    }
  },
  closeSlideOver() {
    return {
      type: 'CLOSE_SLIDEOVER'
    }
  },
  openModal(payload) {
    return {
      type: 'OPEN_MODAL',
      id: payload
    }
  },
  closeModal() {
    return {
      type: 'CLOSE_MODAL'
    }
  }
}

export default actions;