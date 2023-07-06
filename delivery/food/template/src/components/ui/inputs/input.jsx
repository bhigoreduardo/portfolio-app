/* eslint-disable react/prop-types */
const Input = ({ id, label, className, type, errors, ...props }) => {
  return (
    <span>
      <label htmlFor={id} className="block font-bold text-xs text-slate-700 dark:text-white/80">{label}</label>
      <input type={type || "text"} id={id} className={`${className} text-slate-900 dark:text-white text-sm w-full h-10 px-3 py-2 rounded-md border dark:border-slate-800 bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`} {...props} />
      {errors && <span className="text-red-500 text-sm">{errors}</span>}
    </span>
  );
};

export default Input;
