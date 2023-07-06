/* eslint-disable react/prop-types */
const CardTitle = ({ title, href }) => {
  return (
    <div className="flex flex-wrap">
      <h6 className="w-1/2 max-w-full dark:text-white">{title}</h6>
      <div className="w-1/2 max-w-full text-right">
        <a href={href} className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-blue-500 align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer bg-150 active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 hover:opacity-75">Vê todas</a>
      </div>
    </div>
  );
};

export default CardTitle;
