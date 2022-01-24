// Cores
import { useRef, useState } from 'react';

// Hooks
import { useDispatch, useSelector } from 'react-redux';

// Helpers & Libraries
import moment from 'moment';

// Redux
import actions from '../../../redux/actions';

// Components
import Button from '../../Button';

// Icons
import { PlusSmIcon } from '@heroicons/react/outline';

export default function Simple() {
  // Init
  const initialForm = {
    title: '',
    description: ''
  }

  // Hooks
  const [form, setForm] = useState(initialForm);
  const [showForm, setShowForm] = useState(false);
  const formInput = useRef(null);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  // Add/Crate new task
  function _handleAddTask(e) {
    e.preventDefault();
  }

  function submitForm() {
    // Call add task action
    dispatch(actions.addTask({
      id: todos.length + 1,
      status: 0,
      createdAt: moment().format('YYYY-MM-DD HH:mm'),
      ...form
    }));

    // Reset form
    setForm(initialForm);
    setShowForm(false);
  }

  // Handle input change
  function _handleInputChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  // Handle input blur
  function _handleInputBlur(e) {
    const { value } = e.target;
    if (value !== '') {
      submitForm();
    } else {
      setShowForm(false);
    }
  }

  function _handleShowForm(e) {
    e.preventDefault();

    setShowForm(true);
    setTimeout(() => {
      formInput.current.focus();
    }, 0);
  }
  return (
    <>
      { showForm ? (
        <form onSubmit={_handleAddTask}>
          <input
            placeholder="Type task title..."
            className='block w-full border p-2'
            ref={formInput}
            type="text"
            value={form.title}
            name="title"
            onChange={_handleInputChange}
            onBlur={_handleInputBlur} />
        </form>
      ) : (
        <Button onClick={_handleShowForm} block><PlusSmIcon className='h-4 w-4 text-cyan-500 mr-1' aria-hidden="true" />Add Task</Button>
      )}
    </>
  );
}