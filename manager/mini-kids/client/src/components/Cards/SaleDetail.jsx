/* eslint-disable react/prop-types */
const SaleDetailCard = ({ createdAt, orderId, amount, href }) => {
  return (
    <li className="relative flex justify-between">
      <div className="flex flex-col">
        <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">{createdAt}</h6>
        <span className="text-xs leading-tight dark:text-white dark:opacity-80">{orderId}</span>
      </div>
      <div className="flex items-center text-sm leading-normal dark:text-white/80">
        {amount}
        <a href={href} target="_blank" rel="noopener noreferrer" className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700"><i className="mr-1 text-lg leading-none fas fa-file-pdf"></i> PDF</a>
      </div>
    </li>
  );
};

export default SaleDetailCard;
