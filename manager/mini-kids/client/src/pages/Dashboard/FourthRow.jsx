/* eslint-disable react/prop-types */
// import { customers } from "../../utils/data";
import CardTitle from './CardTitle';
import PolarChart from '../../components/Charts/Polar';
import CustomersTable from './CustomersTable';

// const labels = ['Camisa', 'Sándalia', 'Blusa', 'Calção', 'Chinelo', 'Vestido'];
// const data = [12, 19, 13, 20, 20, 18];

const FourthRow = ({ mostSales, customerHappyYear }) => {
  const labels = mostSales?.map((item) => item.product);
  const data = mostSales?.map((item) => item.salesQuantity);
  
  return (
    <div className="flex flex-wrap gap-4 lg:flex-nowrap">
      <div className="w-full min-h-full max-w-full px-3 py-4 lg:w-5/12 flex-col border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative border-solid bg-clip-border rounded-2xl bg-white">
        <CardTitle title="Mais vendidos" href="/produtos" />

        <div className="flex items-center justify-center h-full max-h-[360px]">
          <PolarChart labels={labels} label="Unids" data={data} />
        </div>
      </div>

      <div className="w-full min-h-full max-w-full px-3 py-4 lg:w-7/12 flex-col border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative border-solid bg-clip-border rounded-2xl bg-white">
        <CardTitle title="Aniversariantes do mês" href="/clientes" />
          
        <div className="overflow-x-auto max-h-[360px]">
          <CustomersTable customers={customerHappyYear} />
        </div>
      </div>
    </div>
  );
};

export default FourthRow;
