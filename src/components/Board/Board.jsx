// Cores
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import actions from '../../redux/actions';

// Components
import BoardItem from '../BoardItem';

export default function Board() {
  // Hooks
  const todos = useSelector(state => state.todos);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // Component lifecycle
  useEffect(() => {
    setLoading(true);
    async function getInitialTodos() {
      const initialTodos = await fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
        .then((res) => {
          setLoading(false);
          return res.json()
        });
        
        dispatch(actions.updateTodoList(initialTodos))
    }
    // onComponentDitMount
    getInitialTodos();

    // componentWillUnmount
    return {}
  }, [dispatch]);

  return (
    <div className='grid grid-cols-4 gap-4 pt-8'>
      <div>
        <BoardItem loading={loading} canCreate title="Todos" todos={todos.filter((todo) => Number(todo.status) === 0)
          .sort(function compare(a,b) {
            var dateA = new Date(a.createdAt);
            var dateB = new Date(b.createdAt);
            return dateA - dateB;
          })} />
      </div>
      <div>
        <BoardItem loading={loading} title="Done" todos={todos.filter((todo) => Number(todo.status) === 1)
          .sort(function compare(a,b) {
            var dateA = new Date(a.createdAt);
            var dateB = new Date(b.createdAt);
            return dateB - dateA;
          })} />
      </div>
    </div>
  );
}