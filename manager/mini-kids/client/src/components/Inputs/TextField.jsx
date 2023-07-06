/* eslint-disable react/prop-types */
const TextField = ({ id, label, icon, title, name, placeholder, errors, ...rest }) => {
  return (
    <div>
      <label htmlFor={id} className="block font-bold text-xs text-slate-700 dark:text-white/80">{label}</label>
      <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease mt-2">
        <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
          <i className={icon} aria-hidden="true"></i>
        </span>
        <input id={id} title={title} type="text" name={name} placeholder={placeholder} {...rest} className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow" />
      </div>
      {errors && <span className="text-red-500 text-sm">{errors}</span>}
    </div>
  )
}

export default TextField