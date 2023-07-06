/* eslint-disable react/prop-types */
const Radiobox = ({ children, errors, ...rest }) => {
  return (
    <span className="flex items-center">
      <input type="radio" {...rest} className="text-base w-5 h-5 mr-2 rounded-md appearance-none border border-solid border-slate-150 bg-gray-300 bg-contain bg-center bg-no-repeat align-top transition-all ease checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer" />
      <span className="select-none text-slate-900 dark:opacity-60">{children}</span>
      {errors && <span className="text-red-500 text-sm">{errors}</span>}
    </span>
  );
};

export default Radiobox;