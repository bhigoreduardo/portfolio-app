/* eslint-disable react/prop-types */
import { currencyPrice } from "../../utils/calculate";
import CardInfo from "../../components/Cards/Info";

const FirstRow = ({ amountToday, amountYesterday, salesCurrentYear, salesLastYear, customersCurrentMonth, customersLastMonth, salesCurrentMonth, salesLastMonth, }) => {

  const getPercentage = (lastValue, currValue) => {
    if (lastValue > 0 && !currValue > 0) return -1;
    if (!lastValue > 0 && currValue > 0) return 1;
    return lastValue/currValue || 0;
  }

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="flex-1">
        <CardInfo title="Vendas hoje" value={currencyPrice.format(amountToday || 0)} color={getPercentage(amountYesterday, amountToday) >= 1 ? "text-emerald-500" : "text-red-600"} percentage={`${getPercentage(amountYesterday, amountToday) * 100}%`} description="desde ontem" iconColor="from-blue-500 to-violet-500" icon="fas fa-calendar fa-2x" />
      </div>

      <div className="flex-1">
        <CardInfo title="Vendas anual" value={currencyPrice.format(salesCurrentYear || 0)} color={getPercentage(salesLastYear, salesCurrentYear) >= 1 ? "text-emerald-500" : "text-red-600"} percentage={`${getPercentage(salesLastYear, salesCurrentYear) * 100}%`} description="no ano" iconColor="from-red-600 to-orange-600" icon="fas fa-clipboard-list" />
      </div>

      <div className="flex-1">
        <CardInfo title="Novos clientes" value={customersCurrentMonth || 0} color={getPercentage(customersLastMonth, customersCurrentMonth) >= 1 ? "text-emerald-500" : "text-red-600"} percentage={`${getPercentage(customersLastMonth, customersCurrentMonth) * 100}%`} description="esse mês" iconColor="from-emerald-500 to-teal-400" icon="fas fa-comments fa-2x" />
      </div>

      <div className="flex-1">
        <CardInfo title="Vendas no mês" value={currencyPrice.format(salesCurrentMonth || 0)} color={getPercentage(salesLastMonth, salesCurrentMonth) >= 1 ? "text-emerald-500" : "text-red-600"} percentage={`${getPercentage(salesLastMonth, salesCurrentMonth) * 100}%`} description="no último mês" iconColor="from-orange-500 to-yellow-500" icon="fas fa-dollar-sign fa-2x" />
      </div>
    </div>
  );
};

export default FirstRow;
