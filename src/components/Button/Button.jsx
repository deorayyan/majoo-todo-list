export default function Button({
  children,
  block = false,
  ...rest
}) {
  return (
    <button
      { ...rest }
      type="button"
      className={
        `inline-flex justify-center items-center px-2.5 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500shadow-md
        ${block ? 'w-full' : ''}`
      }>
      { children }
    </button>
  )
}