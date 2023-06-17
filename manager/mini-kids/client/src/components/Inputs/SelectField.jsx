/* eslint-disable react/prop-types */
const SelectField = ({ id, label, icon, name, placeholder, dataList, ...rest }) => {
  return (
    <div>
      <label htmlFor={id} className="font-bold text-xs text-slate-700 dark:text-white/80">{label}</label>
      <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease mt-2">
        <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
          <i className={icon} aria-hidden="true"></i>
        </span>
        <select id={id} name={name} {...rest}  className="pl-9 focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
          <option value="">{placeholder}</option>
          {dataList?.length > 0 && dataList.map((item, i) => (
            <option key={i} value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SelectField