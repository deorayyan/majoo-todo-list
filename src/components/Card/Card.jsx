// Components
import Dropdown from '../Dropdown';

// Icons
import { CalendarIcon } from '@heroicons/react/outline';

export default function Card({
  data
}) {
  return (
    <div className="flex justify-between p-2 border border-gray-100 mb-2 bg-white rounded-sm cursor-pointer hover:bg-gray-50 relative">
      <div>
        <h3 className='mb-1'>{ data.title }</h3>
        <small className='text-gray-400 flex items-center content-center'><CalendarIcon className="h-4 w-4 inline-block text-gray-400 mr-1" aria-hidden="true" /> { data.createdAt }</small>
      </div>
      <Dropdown task={data} />
    </div>
  );
}