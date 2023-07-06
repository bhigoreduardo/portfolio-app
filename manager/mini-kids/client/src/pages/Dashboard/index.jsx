import { useEffect, useState } from "react";

import api from "../../libs/api";
import Layout from "../../components/Layout";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";

const Dashboard = () => {
  const [firstRow, setFirstRow] = useState("");
  const [secondRow, setSecondRow] = useState("");
  const [thirdRow, setThirdRow] = useState("");
  const [fourthRow, setFourthRow] = useState("");

  const searchDashboardData = async () => {
    const { data: firstData } = await api.get("/dashboard/searchFirstRow");
    const { data: secondData } = await api.get("/dashboard/searchSecondRow");
    const { data: thirdData } = await api.get("/dashboard/searchThirdRow");
    const { data: fourthData } = await api.get("/dashboard/searchFourthRow");

    setFirstRow(firstData);
    setSecondRow(secondData);
    setThirdRow(thirdData);
    setFourthRow(fourthData);
  }

  useEffect(() => {
    searchDashboardData();
  }, []);

  return <Layout>
    <FirstRow {...firstRow} />
    <SecondRow {...secondRow} />
    <ThirdRow {...thirdRow} />   
    <FourthRow {...fourthRow} />    
  </Layout>;
};

export default Dashboard;
