import Layout from "../../components/Layout";

import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";

const Dashboard = () => {
  return <Layout>
    <FirstRow />
    <SecondRow />
    <ThirdRow />   
    <FourthRow />    
  </Layout>;
};

export default Dashboard;
