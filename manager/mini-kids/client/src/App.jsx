import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import CustomersForm from "./pages/Customers/Form";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clientes" element={<Customers />} />
        <Route path="/clientes/cadastro" element={<CustomersForm />} />
        <Route path="/clientes/1" element={<CustomersForm />} />
      </Routes>
    </Router>
  );
};

export default App;
