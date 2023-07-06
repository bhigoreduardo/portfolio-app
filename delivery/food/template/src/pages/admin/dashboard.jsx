import { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';

import api from "@/libs/api";
import CardInfo from "@/components/ui/cards/card-info";
import CardTitle from "@/components/ui/cards/card-title";
import NoResults from "@/components/ui/no-results";
import CardOrderDetail from "@/components/ui/cards/card-order-detail";
import ChartLine from "@/components/charts/line";

const labels = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    const { data } = await api.get(`/orders`);
    setOrders(new Array(5).fill(...data));
  }
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {/* FIRST ROW */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex-1">
          <CardInfo title="Pedidos hoje" value={100} color="text-emerald-500" percentage="50%" description="desde ontem" iconColor="from-blue-500 to-violet-500" icon="fas fa-calendar fa-2x" />
        </div>
        <div className="flex-1">
          <CardInfo title="Pedidos pendentes" value={250} color="text-red-600" percentage="100%" description="no ano" iconColor="from-red-600 to-orange-600" icon="fas fa-clipboard-list" />
        </div>
        <div className="flex-1">
          <CardInfo title="Novos clientes" value={250} color="text-emerald-500" percentage="25%" description="esse mês" iconColor="from-emerald-500 to-teal-400" icon="fas fa-comments fa-2x" />
        </div>
        <div className="flex-1">
          <CardInfo title="Vendas do dia" value={700} color="text-emerald-500" percentage="100%" description="no último mês" iconColor="from-orange-500 to-yellow-500" icon="fas fa-dollar-sign fa-2x" />
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="flex flex-row flex-wrap lg:flex-nowrap gap-4 mb-4 max-h-[360px]">
        <div className="px-3 py-4 lg:w-6/12 w-full border dark:border-slate-800 rounded-md shadow-md overflow-y-auto scrollbar-none">
          <CardTitle title="Últimos pedidos" to="pedidos" />
          {!orders?.length > 0
            ? (<NoResults />)
            : (
              <div className="w-full overflow-x-auto scrollbar-none">
                <div className="min-w-[680px]">
                  {orders.map((item, i) => (
                    <CardOrderDetail key={i} {...item} />
                  ))}
                </div>
              </div>
            )
          }
        </div>

        <div className="px-3 py-4 lg:w-6/12 w-full border dark:border-slate-800 rounded-md shadow-md">
          <ChartLine labels={labels} label="Vendas" data={labels.map(() => faker.datatype.number({ min: -1000, max: 1000 }))} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
