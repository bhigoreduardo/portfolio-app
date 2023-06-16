import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";

import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import CustomersForm from "./pages/Customers/Form";
import Supplies from "./pages/Supplies";
import SuppliesForm from "./pages/Supplies/Form";
import Sallers from "./pages/Sallers";
import SallersForm from "./pages/Sallers/Form";
import Brands from "./pages/Brands";
import BrandsForm from "./pages/Brands/Form";
import Categories from "./pages/Categories";
import CategoriesForm from "./pages/Categories/Form";
import Products from "./pages/Products";
import ProductsForm from "./pages/Products/Form";
import Sales from "./pages/Sales";
import SalesForm from "./pages/Sales/Form";
import Payments from "./pages/Payments";
import PaymentsForm from "./pages/Payments/Form";
import Receipts from "./pages/Receipts";
import ReceiptsForm from "./pages/Receipts/Form";
import PaymentsMethods from "./pages/PaymentsMethods";
import PaymentsMethodsForm from "./pages/PaymentsMethods/Form";

// DEVELOPMENT
import ReportsPayments from "./pages/ReportsPayments";
import ReportsReceipts from "./pages/ReportsReceipts";
import ReportsSales from "./pages/ReportsSales";

import Users from "./pages/Users";
import UsersForm from "./pages/Users/Form";
import Profile from "./pages/Profile";
import System from "./pages/System";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme === "light" ? "light" : "dark"}`}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />

          <Route path="/painel" element={<Dashboard />} />
          <Route path="/clientes" element={<Customers />} />
          <Route path="/clientes/cadastro" element={<CustomersForm />} />
          <Route path="/clientes/1" element={<CustomersForm />} />
          <Route path="/fornecedores" element={<Supplies />} />
          <Route path="/fornecedores/cadastro" element={<SuppliesForm />} />
          <Route path="/fornecedores/1" element={<SuppliesForm />} />
          <Route path="/vendedores" element={<Sallers />} />
          <Route path="/vendedores/cadastro" element={<SallersForm />} />
          <Route path="/vendedores/1" element={<SallersForm />} />
          <Route path="/marcas" element={<Brands />} />
          <Route path="/marcas/cadastro" element={<BrandsForm />} />
          <Route path="/marcas/1" element={<BrandsForm />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="/categorias/cadastro" element={<CategoriesForm />} />
          <Route path="/categorias/1" element={<CategoriesForm />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produtos/cadastro" element={<ProductsForm />} />
          <Route path="/produtos/1" element={<ProductsForm />} />
          <Route path="/vendas" element={<Sales />} />
          <Route path="/vendas/cadastro" element={<SalesForm />} />
          <Route path="/vendas/1" element={<SalesForm />} />
          <Route path="/contas-pagar" element={<Payments />} />
          <Route path="/contas-pagar/cadastro" element={<PaymentsForm />} />
          <Route path="/contas-pagar/1" element={<PaymentsForm />} />
          <Route path="/contas-receber" element={<Receipts />} />
          <Route path="/contas-receber/cadastro" element={<ReceiptsForm />} />
          <Route path="/contas-receber/1" element={<ReceiptsForm />} />
          <Route path="/formas-pagamento" element={<PaymentsMethods />} />
          <Route path="/formas-pagamento/cadastro" element={<PaymentsMethodsForm />} />
          <Route path="/formas-pagamento/1" element={<PaymentsMethodsForm />} />
          {/* DEVELOPMENT */}
          <Route path="/relatorios-contas-pagar" element={<ReportsPayments />} />
          <Route path="/relatorios-contas-receber" element={<ReportsReceipts />} />
          <Route path="/relatorios-vendas" element={<ReportsSales />} />

          <Route path="/usuarios" element={<Users />} />
          <Route path="/usuarios/cadastro" element={<UsersForm />} />
          <Route path="/usuarios/1" element={<UsersForm />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/configuracoes" element={<System />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
