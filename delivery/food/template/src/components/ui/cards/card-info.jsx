/* eslint-disable react/prop-types */
const CardInfo = ({ title, value, iconColor, icon }) => {
  return (
    <div className="relative flex p-4 border dark:border-slate-800 rounded-md shadow-md">
      <div className="w-2/3 max-w-full">
        <p className="text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60 truncate">{title}</p>
        <h5 className="mb-2 font-bold dark:text-white">{value}</h5>
      </div>

      <div className="text-right basis-1/3">
        <div className={`inline-block w-12 h-12 text-center rounded-full bg-gradient-to-tl ${iconColor}`}>
          <i className={`${icon} leading-none text-lg relative top-3.5 text-white`}></i>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
