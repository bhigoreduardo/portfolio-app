import CardInfo from "../../components/Cards/Info";

const FirstRow = () => {
  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <CardInfo title="Vendas hoje" value="R$53,000" color="text-emerald-500" percentage="+55%" description="desde ontem" iconColor="from-blue-500 to-violet-500" icon="fas fa-calendar fa-2x" />
      </div>

      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <CardInfo title="Vendas anual" value="R$212,300" color="text-emerald-500" percentage="+3%" description="no ano" iconColor="from-red-600 to-orange-600" icon="fas fa-clipboard-list" />
      </div>

      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <CardInfo title="Novos clientes" value="+50" color="text-red-600" percentage="-2%" description="esse mês" iconColor="from-emerald-500 to-teal-400" icon="fas fa-comments fa-2x" />
      </div>

      <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
        <CardInfo title="Vendas no mês" value="R$103,430" color="text-emerald-500" percentage="+5%" description="no último mês" iconColor="from-orange-500 to-yellow-500" icon="fas fa-dollar-sign fa-2x" />
      </div>
    </div>
  );
};

export default FirstRow;
