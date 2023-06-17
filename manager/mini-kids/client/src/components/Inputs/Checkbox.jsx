/* eslint-disable react/prop-types */
const Checkbox = ({ id, name, value, label, ...rest }) => {
  return (
    <label className="min-h-6 pl-7" htmlFor={id}>
      <input id={id} name={name} type="radio" value={value} {...rest} className="w-5 h-5 ease text-base -ml-7 rounded-1.4  checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100" />
      <span className="cursor-pointer select-none dark:text-white dark:opacity-60">{label}</span>
    </label>
  );
};

export default Checkbox;
