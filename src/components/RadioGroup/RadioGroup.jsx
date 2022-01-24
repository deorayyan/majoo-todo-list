export default function RadioGroup({
  name,
  label,
  items,
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-gray-500">{ label }</legend>
      <div className="mt-2 space-y-5">
        { items.map((item, i) => {
          return (
            <div className="relative flex items-start" key={`${name}-${item.value}`}>
              <div className="absolute flex items-center h-5">
                <input
                  id={`${name}-${i}`}
                  name={name}
                  aria-describedby={`${name}-${i}-description`}
                  type="radio"
                  className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300"
                  { ...item }
                />
              </div>
              <div className="pl-7 text-sm">
                <label htmlFor={`${name}-${i}`} className="font-medium text-gray-900">
                  { item.label }
                </label>
                <p id={`${name}-${i}-description`} className="text-gray-500">
                  { item.description }
                </p>
              </div>
            </div>
          )
        }) }
      </div>
    </fieldset>
  )
}