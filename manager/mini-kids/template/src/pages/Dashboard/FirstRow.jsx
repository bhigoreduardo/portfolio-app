import CardInfo from "../../components/Cards/Info";

const FirstRow = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="flex-1">
        <CardInfo title="Vendas hoje" value="R$53,000" color="text-emerald-500" percentage="+55%" description="desde ontem" iconColor="from-blue-500 to-violet-500" icon="fas fa-calendar fa-2x" />
      </div>

      <div className="flex-1">
        <CardInfo title="Vendas anual" value="R$212,300" color="text-emerald-500" percentage="+3%" description="no ano" iconColor="from-red-600 to-orange-600" icon="fas fa-clipboard-list" />
      </div>

      <div className="flex-1">
        <CardInfo title="Novos clientes" value="+50" color="text-red-600" percentage="-2%" description="esse mês" iconColor="from-emerald-500 to-teal-400" icon="fas fa-comments fa-2x" />
      </div>

      <div className="flex-1">
        <CardInfo title="Vendas no mês" value="R$103,430" color="text-emerald-500" percentage="+5%" description="no último mês" iconColor="from-orange-500 to-yellow-500" icon="fas fa-dollar-sign fa-2x" />
      </div>
    </div>
  );
};

export default FirstRow;
