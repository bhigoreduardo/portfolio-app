import Layout from "../../components/Layout";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  RadialLinearScale,
  ArcElement,
} from 'chart.js';
import { Line, PolarArea } from 'react-chartjs-2';
import { faker  } from '@faker-js/faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      // position: 'top',
    },
    title: {
      display: false,
      // text: 'Chart.js Line Chart',
    },
    scales: {
      r: false,
      xAxes: [{
          gridLines: {
              display:false
          }
      }],
      yAxes: [{
          gridLines: {
              display:false
          }   
      }]
  }
  },
};
const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
const data = {
  labels,
  datasets: [
    // {
    //   label: 'Dataset 1',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(255, 99, 132)',
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    // },
    {
      label: 'Vendas',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
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

const Dashboard = () => {
  return <Layout>
    <div className="flex flex-wrap -mx-3">
      {/* <!-- card1 --> */}
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Vendas hoje</p>
                  <h5 className="mb-2 font-bold dark:text-white">R$53,000</h5>
                  <p className="mb-0 dark:text-white dark:opacity-60">
                    <span className="text-sm font-bold leading-normal text-emerald-500">+55%</span>&nbsp;desde ontem
                  </p>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                  <i className="fas fa-calendar fa-2x leading-none text-lg relative top-3.5 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- card2 --> */}
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Vendas anual</p>
                  <h5 className="mb-2 font-bold dark:text-white">R$212,300</h5>
                  <p className="mb-0 dark:text-white dark:opacity-60">
                    <span className="text-sm font-bold leading-normal text-emerald-500">+3%</span>&nbsp;no ano
                  </p>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                  <i className="fas fa-clipboard-list leading-none text-lg relative top-3.5 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- card3 --> */}
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Novos clientes</p>
                  <h5 className="mb-2 font-bold dark:text-white">+50</h5>
                  <p className="mb-0 dark:text-white dark:opacity-60">
                    <span className="text-sm font-bold leading-normal text-red-600">-2%</span>&nbsp;desse mês
                  </p>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                  <i className="fas fa-comments fa-2x leading-none text-lg relative top-3.5 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- card4 --> */}
      <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Vendas no mês</p>
                  <h5 className="mb-2 font-bold dark:text-white">R$103,430</h5>
                  <p className="mb-0 dark:text-white dark:opacity-60">
                    <span className="text-sm font-bold leading-normal text-emerald-500">+5%</span>&nbsp;no último mês
                  </p>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                  <i className="fas fa-dollar-sign fa-2x leading-none text-lg relative top-3.5 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
            {/* <div>
              <canvas id="chart-line" height="300"></canvas>
            </div> */}
          </div>
        </div>
      </div>

      <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          {/* <!-- slide 1 --> */}
          <div className="absolute w-full h-full transition-all duration-500">
            <img className="object-cover h-full" src="/img/carousel-1.jpg" alt="carousel image" />
            <div className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
              <div className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                <i className="top-0.75 text-xxs relative text-slate-700 fa fa-users"></i>
              </div>
              <h5 className="mb-1 text-white">Get started with Argon</h5>
              <p className="dark:opacity-80">Theres nothing I really wanted to do in life that I wasn’t able to get good at.</p>
            </div>
          </div>

          {/* <!-- slide 2 --> */}
          <div className="absolute w-full h-full transition-all duration-500">
            <img className="object-cover h-full" src="/img/carousel-2.jpg" alt="carousel image" />
            <div className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
              <div className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                <i className="top-0.75 text-xxs relative text-slate-700 fa fa-users"></i>
              </div>
              <h5 className="mb-1 text-white">Faster way to create web pages</h5>
              <p className="dark:opacity-80">Thats my skill. Im not really specifically talented at anything except for the ability to learn.</p>
            </div>
          </div>

          {/* <!-- slide 3 --> */}
          <div className="absolute w-full h-full transition-all duration-500">
            <img className="object-cover h-full" src="/img/carousel-3.jpg" alt="carousel image" />
            <div className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
              <div className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                <i className="top-0.75 text-xxs relative text-slate-700 fa fa-users"></i>
              </div>
              <h5 className="mb-1 text-white">Share with us your design tips!</h5>
              <p className="dark:opacity-80">Dont be afraid to be wrong because you cant learn anything from a compliment.</p>
            </div>
          </div>

          {/* <!-- Control buttons --> */}
          <button className="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-right active:scale-110 top-6 right-4"></button>
          <button className="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-left active:scale-110 top-6 right-16"></button>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap mt-6 -mx-3">
      <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
        <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
          <div className="p-4 pb-0 mb-0 rounded-t-4">
            <div className="flex justify-between">
              <h6 className="mb-2 dark:text-white">Últimas vendas</h6>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
              <tbody>
                <tr>
                  <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                    <div className="flex items-center px-2 py-1">
                      <div>
                        <img src="/img/shirt.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div className="ml-6">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">SKU689AD</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">Camisa</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Quantidade:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">20 unids</h6>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Total:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">R$230,90</h6>
                    </div>
                  </td>
                  <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="flex-1 text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Estoque:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">29 unids</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                    <div className="flex items-center px-2 py-1">
                      <div>
                        <img src="/img/shirt.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div className="ml-6">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">SKU689AD</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">Camisa</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Quantidade:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">20 unids</h6>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Total:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">R$230,90</h6>
                    </div>
                  </td>
                  <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="flex-1 text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Estoque:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">29 unids</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                    <div className="flex items-center px-2 py-1">
                      <div>
                        <img src="/img/shirt.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div className="ml-6">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">SKU689AD</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">Camisa</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Quantidade:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">20 unids</h6>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Total:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">R$230,90</h6>
                    </div>
                  </td>
                  <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="flex-1 text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Estoque:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">29 unids</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-middle bg-transparent border-0 w-3/10 whitespace-nowrap">
                    <div className="flex items-center px-2 py-1">
                      <div>
                        <img src="/img/shirt.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div className="ml-6">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">SKU689AD</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">Camisa</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Quantidade:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">20 unids</h6>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Total:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">R$143,90</h6>
                    </div>
                  </td>
                  <td className="p-2 text-sm leading-normal align-middle bg-transparent border-0 whitespace-nowrap">
                    <div className="flex-1 text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Estoque:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">32 unids</h6>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
        <div className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="p-4 pb-0 rounded-t-4">
            <h6 className="mb-0 dark:text-white">Mais antigos</h6>
          </div>
          <div className="flex-auto p-4">
            <ul className="flex flex-row justify-between flex-wrap pl-0 mb-0 rounded-lg">
              <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit">
                <div className="flex items-center">
                  <div>
                    <img src="/img/shirt.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">SKU689AD</p>
                    <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">Camisa</h6>
                    <span className="text-xs leading-tight dark:text-white/80">250 unids, <span className="font-semibold">R$34,60</span></span>
                  </div>
                </div>
                <div className="flex">
                  <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white"><i className="ni ease-bounce text-2xs group-hover:translate-x-1.25 fa fa-arrow-right transition-all duration-200" aria-hidden="true"></i></button>
                </div>
              </li>
              <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit">
                <div className="flex items-center">
                  <div>
                    <img src="/img/shirt.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">SKU689AD</p>
                    <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">Camisa</h6>
                    <span className="text-xs leading-tight dark:text-white/80">250 unids, <span className="font-semibold">R$34,60</span></span>
                  </div>
                </div>
                <div className="flex">
                  <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white"><i className="ni ease-bounce text-2xs group-hover:translate-x-1.25 fa fa-arrow-right transition-all duration-200" aria-hidden="true"></i></button>
                </div>
              </li>
              <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit">
                <div className="flex items-center">
                  <div>
                    <img src="/img/shirt.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">SKU689AD</p>
                    <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">Camisa</h6>
                    <span className="text-xs leading-tight dark:text-white/80">250 unids, <span className="font-semibold">R$34,60</span></span>
                  </div>
                </div>
                <div className="flex">
                  <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white"><i className="ni ease-bounce text-2xs group-hover:translate-x-1.25 fa fa-arrow-right transition-all duration-200" aria-hidden="true"></i></button>
                </div>
              </li>
              <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit">
                <div className="flex items-center">
                  <div>
                    <img src="/img/shirt.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">SKU689AD</p>
                    <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">Camisa</h6>
                    <span className="text-xs leading-tight dark:text-white/80">250 unids, <span className="font-semibold">R$34,60</span></span>
                  </div>
                </div>
                <div className="flex">
                  <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white"><i className="ni ease-bounce text-2xs group-hover:translate-x-1.25 fa fa-arrow-right transition-all duration-200" aria-hidden="true"></i></button>
                </div>
              </li>
              <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit">
                <div className="flex items-center">
                  <div>
                    <img src="/img/shirt.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">SKU689AD</p>
                    <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">Camisa</h6>
                    <span className="text-xs leading-tight dark:text-white/80">250 unids, <span className="font-semibold">R$34,60</span></span>
                  </div>
                </div>
                <div className="flex">
                  <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white"><i className="ni ease-bounce text-2xs group-hover:translate-x-1.25 fa fa-arrow-right transition-all duration-200" aria-hidden="true"></i></button>
                </div>
              </li>
              <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit">
                <div className="flex items-center">
                  <div>
                    <img src="/img/shirt.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">SKU689AD</p>
                    <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">Camisa</h6>
                    <span className="text-xs leading-tight dark:text-white/80">250 unids, <span className="font-semibold">R$34,60</span></span>
                  </div>
                </div>
                <div className="flex">
                  <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white"><i className="ni ease-bounce text-2xs group-hover:translate-x-1.25 fa fa-arrow-right transition-all duration-200" aria-hidden="true"></i></button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap mt-6 -mx-3">
    <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
        <div className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="p-4 pb-0 rounded-t-4">
            <h6 className="mb-0 dark:text-white">Mais vendidos</h6>
          </div>
          <div className="flex-auto p-4">
            <PolarArea options={options} data={dataRadial} />
          </div>
        </div>
      </div>
      <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
        <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
          <div className="p-4 pb-0 mb-0 rounded-t-4">
            <div className="flex justify-between">
              <h6 className="mb-2 dark:text-white">Aniversariantes</h6>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
              <tbody>
                <tr>
                  <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                    <div className="flex items-center px-2 py-1">
                      <div>
                        <img src="/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div className="ml-6">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">John Michael</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">(11) 9 87456-1234</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">VENDA689AD</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">john@creative-tim.com</h6>
                    </div>
                  </td>
                  <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="flex-1 text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Total:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">R$230,90</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                    <div className="flex items-center px-2 py-1">
                      <div>
                        <img src="/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div className="ml-6">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">John Michael</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">(11) 9 87456-1234</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">VENDA689AD</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">john@creative-tim.com</h6>
                    </div>
                  </td>
                  <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="flex-1 text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Total:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">R$230,90</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                    <div className="flex items-center px-2 py-1">
                      <div>
                        <img src="/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div className="ml-6">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">John Michael</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">(11) 9 87456-1234</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">VENDA689AD</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">john@creative-tim.com</h6>
                    </div>
                  </td>
                  <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="flex-1 text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Total:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">R$230,90</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                    <div className="flex items-center px-2 py-1">
                      <div>
                        <img src="/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div className="ml-6">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">John Michael</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">(11) 9 87456-1234</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">VENDA689AD</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">john@creative-tim.com</h6>
                    </div>
                  </td>
                  <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="flex-1 text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Total:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">R$230,90</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                    <div className="flex items-center px-2 py-1">
                      <div>
                        <img src="/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div className="ml-6">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">John Michael</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">(11) 9 87456-1234</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">VENDA689AD</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">john@creative-tim.com</h6>
                    </div>
                  </td>
                  <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="flex-1 text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Total:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">R$230,90</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                    <div className="flex items-center px-2 py-1">
                      <div>
                        <img src="/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div className="ml-6">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">John Michael</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">(11) 9 87456-1234</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">VENDA689AD</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">john@creative-tim.com</h6>
                    </div>
                  </td>
                  <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="flex-1 text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Total:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">R$230,90</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                    <div className="flex items-center px-2 py-1">
                      <div>
                        <img src="/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div className="ml-6">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">John Michael</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">(11) 9 87456-1234</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">VENDA689AD</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">john@creative-tim.com</h6>
                    </div>
                  </td>
                  <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                    <div className="flex-1 text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Total:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">R$230,90</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-middle bg-transparent border-0 w-3/10 whitespace-nowrap">
                    <div className="flex items-center px-2 py-1">
                      <div>
                        <img src="/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div className="ml-6">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">John Michael</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">(11) 9 87456-1234</h6>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">VENDA689AD</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">john@creative-tim.com</h6>
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                    <div className="text-center">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Total:</p>
                      <h6 className="mb-0 text-sm leading-normal dark:text-white">R$143,90</h6>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Layout>;
};

export default Dashboard;
