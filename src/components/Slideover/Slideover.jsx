import { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import actions from '../../redux/actions';

// Components
import RadioGroup from '../RadioGroup';

export default function Slideover() {
  // Hooks
  const slideOverOpened = useSelector(state => state.slideOverOpened);
  const taskDetail = useSelector(state => state.taskDetail);
  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  // Handle input change
  function _handleInputChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  function _handleSaveTask(e) {
    e.preventDefault();

    // Call save task action
    dispatch(actions.updateTask(form));

    // Reset form
    // setForm(initialForm);
    // setShowForm(false);
  }

  useEffect(() => {
    setForm(taskDetail);
  }, [taskDetail])

  return (
    <Transition.Root show={slideOverOpened} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={() => dispatch(actions.closeSlideOver())}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 pl-16 max-w-full right-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <form onSubmit={_handleSaveTask} className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                  <div className="flex-1 h-0 overflow-y-auto">
                    <div className="py-6 px-4 bg-cyan-700 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">Task Detail</Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="bg-cyan-700 rounded-md text-cyan-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => dispatch(actions.closeSlideOver())}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-white opacity-50">
                          This is task detail. You can update task detail by clicking each field and start editing.
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="px-4 divide-y divide-gray-200 sm:px-6">
                        <div className="space-y-6 pt-6 pb-5">
                          <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-500">
                              Title
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="title"
                                id="title"
                                value={form.title}
                                className="border p-2 block w-full shadow-sm sm:text-sm focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
                                onChange={_handleInputChange}
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-500">
                              Description
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="description"
                                name="description"
                                rows={4}
                                className="p-2 block w-full shadow-sm sm:text-sm focus:ring-cyan-500 focus:border-cyan-500 border border-gray-300 rounded-md"
                                value={form.description}
                                onChange={_handleInputChange}
                              />
                            </div>
                          </div>

                          <RadioGroup
                            name="status"
                            label="Status"
                            items={[
                              {
                                label: 'Todo',
                                description: 'Mark this task as Todo',
                                value: 0,
                                checked: Number(form.status) === 0,
                                onChange: _handleInputChange
                              },
                              {
                                label: 'Done',
                                description: 'Mark this task as Done',
                                value: 1,
                                checked: Number(form.status) === 1,
                                onChange: _handleInputChange
                              },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      onClick={() => dispatch(actions.closeSlideOver())}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}