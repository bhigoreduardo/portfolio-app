import Layout from "src/components/Layout";
import CardInfo from "src/components/Cards/Info";
import ChartArea from "src/components/Charts/Area";
import PieChart from "src/components/Charts/Pie";
import CardProgress from "src/components/Cards/Progress";

const Dashboard = () => {
  return (
    <Layout>
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Início</h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Gerar Relatórios
        </a>
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">
        <CardInfo type="primary" title="Vendas (Mês)" value="R$40,000" icon={<i className='fas fa-calendar fa-2x text-gray-300'></i>} />
        <CardInfo type="success" title="Vendas (Ano)" value="R$215,000" icon={<i className='fas fa-dollar-sign fa-2x text-gray-300'></i>} />
        <CardInfo type="info" title="Estoque" value="50%" variate="progress" icon={<i className='fas fa-clipboard-list fa-2x text-gray-300'></i>} />
        <CardInfo type="warning" title="Pagamentos atrasados" value="18" icon={<i className='fas fa-comments fa-2x text-gray-300'></i>} />
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">
        {/* <!-- Area Chart --> */}
        <div className="col-xl-8 col-lg-7">
          <ChartArea />
        </div>

        {/* <!-- Pie Chart --> */}
        <div className="col-xl-4 col-lg-5">
          <PieChart />
        </div>
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">
        {/* <!-- Project Card Example --> */}
        <CardProgress />
      </div>
    </Layout>
  );
};

export default Dashboard;
