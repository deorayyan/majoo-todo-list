// Hooks
import { useDispatch } from 'react-redux';

// Components
import Card from '../Card';
import SimpleForm from '../Form/Simple';

// Redux
import actions from '../../redux/actions';

export default function BoardItem({
  title,
  todos,
  canCreate = false,
  loading = false,
}) {
  const dispatch = useDispatch();

  function viewTask(id) {
    dispatch(actions.getTask(id));
  }

  return (
    <div className="p-2 bg-white rounded-md shadow-md">
      <h2 className="mb-2 font-bold">{ title }</h2>
      { loading ? (
        <div className='text-gray-500'>Loading tasks...</div>
      ) : (
        <ul>
          { todos.length > 0 ? todos.map(todo => {
            return (
              <li key={todo.id} onClick={() => { viewTask(todo.id) }}>
                <Card data={todo} />
              </li>
            )
          }) : (
            <li className='text-gray-400 text-sm'>No tasks yet</li>
          )}
          { canCreate && (
            <li>
              <SimpleForm />
            </li>
          ) }
        </ul>
      ) }
    </div>
  );
}