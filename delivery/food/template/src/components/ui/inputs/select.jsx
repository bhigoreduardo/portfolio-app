/* eslint-disable react/prop-types */
const Select = ({ id, label, className, placeholder, data, errors, ...props }) => {
  return (
    <span>
      <label htmlFor={id} className="block font-bold text-xs text-slate-700 dark:text-white/80">{label}</label>
      <select id={id} className={`${className} flex dark:bg-slate-900 dark:text-white text-slate-900 h-10 text-sm w-full px-3 py-2 rounded-md border dark:border-slate-800 bg-transparent placeholder:text-zinc-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`} {...props}>
        <option value="" disabled>{placeholder}</option>
        {data?.length > 0 && data.map((item, i) => (
          <option key={i} value={item.value}>{item.label}</option>
        ))}
      </select>
      {errors && <span className="text-red-500 text-sm">{errors}</span>}
    </span>
  );
};

export default Select;
