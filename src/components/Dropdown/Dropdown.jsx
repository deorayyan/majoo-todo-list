import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/solid'

import { useDispatch } from 'react-redux';

// Redux
import actions from '../../redux/actions';

export default function Dropdown({
  task
}) {
  const dispatch = useDispatch();

  function _handleDeleteConfirmation(e) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(actions.openModal(task.id));
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="rounded-full flex items-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-cyan-500">
          <span className="sr-only">Open options</span>
          <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute z-20 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <button
                disabled={Number(task.status) === 1}
                className={
                  `text-gray-700 w-full text-left block px-4 py-2 text-sm ${task.status === 1 ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100'}`
                }
                onClick={_handleDeleteConfirmation}
              >
                Delete Task
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}