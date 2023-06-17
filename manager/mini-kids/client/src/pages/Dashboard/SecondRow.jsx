import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker  } from '@faker-js/faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);
const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
    scales: {
      xAxes: [{ gridLines: { display:false } }],
      yAxes: [{ gridLines: { display:false } }]
  }
  },
};
const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
const data = {
  labels,
  datasets: [
    {
      label: 'Vendas',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const SecondRow = () => {
  return (
    <div className="flex flex-wrap mt-6 -mx-3">
      <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
        <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
            <h6 className="capitalize dark:text-white">Resumo das vendas</h6>
            <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
              <i className="fa fa-arrow-up text-emerald-500"></i>&nbsp;
              <span className="font-semibold">4%</span> comparado a 2021
            </p>
          </div>
          <div className="flex-auto p-4">
            <Line options={options} data={data} />
          </div>
        </div>
      </div>

      <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
        <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <div className="flex flex-wrap -mx-3">
              <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                <h6 className="mb-0 dark:text-white">Últimas vendas</h6>
              </div>
              <div className="flex-none w-1/2 max-w-full px-3 text-right">
                <button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-blue-500 align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer bg-150 active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 hover:opacity-75">Vê todas</button>
              </div>
            </div>
          </div>
          <div className="flex-auto p-4 pb-0">
            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
              <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                <div className="flex flex-col">
                  <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">1 Março 2020</h6>
                  <span className="text-xs leading-tight dark:text-white dark:opacity-80">#MS-415646</span>
                </div>
                <div className="flex items-center text-sm leading-normal dark:text-white/80">
                  R$180
                  <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700"><i className="mr-1 text-lg leading-none fas fa-file-pdf"></i> PDF</button>
                </div>
              </li>
              <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                <div className="flex flex-col">
                  <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">10 Fevereiro 2021</h6>
                  <span className="text-xs leading-tight dark:text-white dark:opacity-80">#RV-126749</span>
                </div>
                <div className="flex items-center text-sm leading-normal dark:text-white/80">
                  R$250
                  <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700"><i className="mr-1 text-lg leading-none fas fa-file-pdf"></i> PDF</button>
                </div>
              </li>
              <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                <div className="flex flex-col">
                  <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">05 Abril 2020</h6>
                  <span className="text-xs leading-tight dark:text-white dark:opacity-80">#FB-212562</span>
                </div>
                <div className="flex items-center text-sm leading-normal dark:text-white/80">
                  R$560
                  <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700"><i className="mr-1 text-lg leading-none fas fa-file-pdf"></i> PDF</button>
                </div>
              </li>
              <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                <div className="flex flex-col">
                  <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">25 Junho 2019</h6>
                  <span className="text-xs leading-tight dark:text-white dark:opacity-80">#QW-103578</span>
                </div>
                <div className="flex items-center text-sm leading-normal dark:text-white/80">
                  R$120
                  <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700"><i className="mr-1 text-lg leading-none fas fa-file-pdf"></i> PDF</button>
                </div>
              </li>
              <li className="relative flex justify-between px-4 py-2 pl-0 border-0 rounded-b-inherit rounded-xl text-inherit">
                <div className="flex flex-col">
                  <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">1 Março 2019</h6>
                  <span className="text-xs leading-tight dark:text-white dark:opacity-80">#AR-803481</span>
                </div>
                <div className="flex items-center text-sm leading-normal dark:text-white/80">
                  R$300
                  <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700"><i className="mr-1 text-lg leading-none fas fa-file-pdf"></i> PDF</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondRow;
