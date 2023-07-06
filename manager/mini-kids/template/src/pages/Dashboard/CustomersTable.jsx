/* eslint-disable react/prop-types */
const CustomersTable = ({ customers }) => {
  return (
    <table className="items-center w-full align-top border-collapse border-gray-200 dark:border-white/40">
      <tbody>
        {
          customers?.length > 0 &&
            customers.map((item, i) => (
              <tr key={i}>
                <td className={`${i === customers.length - 1 ? "border-0" : "border-b"} p-2 align-middle bg-transparent w-3/10 whitespace-nowrap dark:border-white/40`}>
                  <div className="flex items-center gap-1 px-2 py-1">
                    <div className="w-1/4">
                      <img src={item.image} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                    </div>
                    <div className="w-3/4">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">{item.name} {item.lastName}</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">{item.mobile}</h6>
                    </div>
                  </div>
                </td>
                <td className={`${i === customers.length - 1 ? "border-0" : "border-b"} p-2 align-middle bg-transparent whitespace-nowrap dark:border-white/40`}>
                  <div className="text-center">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">VENDA689AD</p>
                    <h6 className="mb-0 text-sm leading-normal dark:text-white">{item.email}</h6>
                  </div>
                </td>
                <td className={`${i === customers.length - 1 ? "border-0" : "border-b"} p-2 text-sm leading-normal align-middle bg-transparent whitespace-nowrap dark:border-white/40`}>
                  <div className="flex-1 text-center">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Última compra:</p>
                    <h6 className="mb-0 text-sm leading-normal dark:text-white">#MS-415646</h6>
                  </div>
                </td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};

export default CustomersTable;
