/* eslint-disable react/prop-types */
// import { faker } from '@faker-js/faker';

import { currencyPrice, optionsLocaleDate } from '../../utils/calculate';
import LineChart from '../../components/Charts/Line';
import CardTitle from './CardTitle';
import SaleDetailCard from '../../components/Cards/SaleDetail';

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const SecondRow = ({ sales, lastSales }) => {
  return (
    <div className="flex flex-row flex-wrap lg:flex-nowrap gap-4 mb-4">
      <div className="w-full min-h-full max-w-full px-3 py-4 lg:w-7/12 flex-col border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative border-solid bg-clip-border rounded-2xl bg-white">
        {/* TITLE */}
        <div className="mb-4">
          <h6 className="capitalize dark:text-white">Resumo das vendas</h6>
          <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
            <i className="fa fa-arrow-up text-emerald-500"></i>&nbsp;
            <span className="font-semibold">4%</span> comparado a 2021
          </p>
        </div>

        {/* <LineChart labels={labels} label="Vendas" data={labels.map(() => faker.datatype.number({ min: -1000, max: 1000 }))} /> */}
        <LineChart labels={labels} label="Vendas" data={sales} />
      </div>

      <div className="w-full min-h-full max-w-full px-3 py-4 lg:w-5/12 flex-col border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative border-solid bg-clip-border rounded-2xl bg-white">
        <CardTitle title="Últimas vendas" href="/vendas" />

        <ul className="flex flex-col gap-6 rounded-lg overflow-y-auto mt-4 max-h-[360px]">
          {
            !lastSales?.length > 0
              ? (
                <h6 className="dark:text-white text-center mb-6">Nenhuma venda encontrada</h6>
              ) : (
                lastSales.map((item, i) => (
                  <SaleDetailCard key={i} createdAt={new Date(item.createdAt).toLocaleDateString("pt-BR", optionsLocaleDate)} orderId={`Venda: ${item.id}`} amount={currencyPrice.format(item.amount)} href={`/vendas/imprimir/${item.id}`} />
                ))
              )
          }
        </ul>      
      </div>
    </div>
  );
};

export default SecondRow;
