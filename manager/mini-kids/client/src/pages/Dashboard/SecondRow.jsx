import { faker } from '@faker-js/faker';

import LineChart from '../../components/Charts/Line';
import CardTitle from './CardTitle';
import SaleDetailCard from '../../components/Cards/SaleDetail';

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];

const SecondRow = () => {
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

        <LineChart labels={labels} label="Vendas" data={labels.map(() => faker.datatype.number({ min: -1000, max: 1000 }))} />
      </div>

      <div className="w-full min-h-full max-w-full px-3 py-4 lg:w-5/12 flex-col border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative border-solid bg-clip-border rounded-2xl bg-white">
        <CardTitle title="Últimas vendas" />

        <ul className="flex flex-col gap-6 rounded-lg overflow-y-auto mt-4 max-h-[360px]">
          <SaleDetailCard createdAt="1 Março 2020" orderId="#MS-415646" amount="R$180" />
          <SaleDetailCard createdAt="10 Fevereiro 2021" orderId="#RV-126749" amount="R$250" />
          <SaleDetailCard createdAt="05 Abril 2020" orderId="#FB-212562" amount="R$560" />
          <SaleDetailCard createdAt="25 Junho 2019" orderId="#QW-103578" amount="R$120" />
          <SaleDetailCard createdAt="1 Março 2019" orderId="#AR-803481" amount="R$300" />
          <SaleDetailCard createdAt="1 Março 2019" orderId="#AR-803481" amount="R$300" />
          <SaleDetailCard createdAt="1 Março 2019" orderId="#AR-803481" amount="R$300" />
          <SaleDetailCard createdAt="1 Março 2019" orderId="#AR-803481" amount="R$300" />
        </ul>      
      </div>
    </div>
  );
};

export default SecondRow;
