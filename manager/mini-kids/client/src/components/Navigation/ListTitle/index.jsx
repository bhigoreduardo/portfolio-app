/* eslint-disable react/prop-types */
const ListTitle = ({ heading, target, title, icon }) => {
  return (
    <div className="flex items-center flex-wrap sm:justify-between justify-center gap-4 p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
      <h6 className="dark:text-white">{heading}</h6>
      <a href={target} title={title} className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white uppercase align-middle transition-all ease-in rounded-lg shadow-xs cursor-pointer bg-gradient-to-tl from-blue-500 to-violet-500 text-xs tracking-tight-rem bg-150 bg-x-25 hover:-translate-y-px active:opacity-85 hover:shadow-md">
        <i className={`${icon} text-white-50`}></i>&nbsp;Adicionar
      </a>
    </div>
  );
};

export default ListTitle;
