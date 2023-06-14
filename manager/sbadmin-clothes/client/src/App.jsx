import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "src/pages/Dashboard";
import Customers from "src/pages/Customers";
import CustomersForm from "src/pages/Customers/Form";
import Supplies from "src/pages/Supplies";
import SuppliesForm from "src/pages/Supplies/Form";
import Sallers from "src/pages/Sallers";
import SallersForm from "src/pages/Sallers/Form";
import Brands from "src/pages/Brands";
import BrandsForm from "src/pages/Brands/Form";
import Categories from "src/pages/Categories";
import CategoriesForm from "src/pages/Categories/Form";
import Products from "src/pages/Products";
import ProductsForm from "src/pages/Products/Form";
import Payments from "src/pages/Payments";
import PaymentsForm from "src/pages/Payments/Form";
import Receipts from "src/pages/Receipts";
import ReceiptsForm from "src/pages/Receipts/Form";
import PaymentsMethods from "src/pages/PaymentsMethods";
import PaymentsMethodsForm from "src/pages/PaymentsMethods/Form";

import ReportsPayments from "src/pages/ReportsPayments";
import ReportsReceipts from "src/pages/ReportsReceipts";
import ReportsSales from "src/pages/ReportsSales";

import Sales from "src/pages/Sales";
import SalesRegister from "src/pages/Sales/Register";
import SalesEdit from "src/pages/Sales/Edit";
import Users from "src/pages/Users";
import UsersRegister from "src/pages/Users/Register";
import UsersEdit from "src/pages/Users/Edit";

import System from "src/pages/System";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
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
        <Route path="/contas-pagar" element={<Payments />} />
        <Route path="/contas-pagar/cadastro" element={<PaymentsForm />} />
        <Route path="/contas-pagar/1" element={<PaymentsForm />} />
        <Route path="/contas-receber" element={<Receipts />} />
        <Route path="/contas-receber/cadastro" element={<ReceiptsForm />} />
        <Route path="/contas-receber/1" element={<ReceiptsForm />} />
        <Route path="/formas-pagamento" element={<PaymentsMethods />} />
        <Route path="/formas-pagamento/cadastro" element={<PaymentsMethodsForm />} />
        <Route path="/formas-pagamento/1" element={<PaymentsMethodsForm />} />

        <Route path="/relatorios-contas-pagar" element={<ReportsPayments />} />
        <Route path="/relatorios-contas-receber" element={<ReportsReceipts />} />
        <Route path="/relatorios-vendas" element={<ReportsSales />} />

        <Route path="/vendas" element={<Sales />} />
        <Route path="/vendas/cadastro" element={<SalesRegister />} />
        <Route path="/vendas/1" element={<SalesEdit />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/usuarios/cadastro" element={<UsersRegister />} />
        <Route path="/usuarios/1" element={<UsersEdit />} />

        <Route path="/sistema" element={<System />} />
      </Routes>
    </Router>
  );
}

export default App;
