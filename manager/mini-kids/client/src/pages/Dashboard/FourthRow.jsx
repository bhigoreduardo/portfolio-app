import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { customers } from "../../utils/data";
ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
);
const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
};
const dataRadial = {
  labels: ['Camisa', 'Sándalia', 'Blusa', 'Calção', 'Chinelo', 'Vestido'],
  datasets: [
    {
      label: 'Unids',
      data: [12, 19, 13, 20, 20, 18],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

const FourthRow = () => {
  return (
    <div className="flex flex-wrap mt-6 -mx-3">
      <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
        <div className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <div className="flex flex-wrap -mx-3">
              <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                <h6 className="mb-0 dark:text-white">Mais vendidos</h6>
              </div>
              <div className="flex-none w-1/2 max-w-full px-3 text-right">
                <button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-blue-500 align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer bg-150 active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 hover:opacity-75">Vê todas</button>
              </div>
            </div>
          </div>
          <div className="flex-auto p-4">
            <PolarArea options={options} data={dataRadial} />
          </div>
        </div>
      </div>

      <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
        <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
          <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <div className="flex flex-wrap -mx-3">
              <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                <h6 className="mb-0 dark:text-white">Clientes aniversariantes</h6>
              </div>
              <div className="flex-none w-1/2 max-w-full px-3 text-right">
                <button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-blue-500 align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer bg-150 active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 hover:opacity-75">Vê todas</button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
              <tbody>
                {
                  customers?.length > 0 &&
                    customers.map((item, i) => (
                      <tr key={i}>
                        <td className={`${i === customers.length - 1 ? "border-0" : "border-b"} p-2 align-middle bg-transparent w-3/10 whitespace-nowrap dark:border-white/40`}>
                          <div className="flex items-center px-2 py-1">
                            <div>
                              <img src={item.image} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                            </div>
                            <div className="ml-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthRow;
