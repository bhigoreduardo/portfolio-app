import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const App = () => {
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
        <Route path="/vendas" element={<Sales />} />
        <Route path="/vendas/cadastro" element={<SalesForm />} />
        <Route path="/vendas/1" element={<SalesForm />} />
      </Routes>
    </Router>
  );
};

export default App;
