import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { UserContext } from "@/contexts/UserContext";
import { ProductContext } from "@/contexts/ProductContext.jsx";
import { ProdutModal } from "@/components/ui/modals/modal-product";

// ADMIN
import Admin from "@/layouts/admin";
import AdminLogin from "@/pages/admin/login";
import Dashboard from "@/pages/admin/dashboard";
import Billboards from "@/pages/admin/billboards";
import BillboardsForm from "@/pages/admin/billboards-form";
import Categories from "@/pages/admin/categories";
import CategoriesForm from "@/pages/admin/categories-form";
import Products from "@/pages/admin/products";
import ProductsForm from "@/pages/admin/products-form";
import Orders from "@/pages/admin/orders";
import OrdersForm from "@/pages/admin/orders-form";
import Customers from "@/pages/admin/customers";
import CustomersForm from "@/pages/admin/customers.form";
import Bartendings from "@/pages/admin/bartendings";
import BartendingsForm from "@/pages/admin/bartendings-form";
import Settings from "@/pages/admin/settings";
import AdminRecoveryPassword from "@/pages/admin/recovery-password";

// WEB
import Web from "@/layouts/web";
import Home from "@/pages/web/home";
import WebLogin from "@/pages/web/login";
import Profile from "@/pages/web/profile";
import WebRecoveryPassword from "@/pages/web/recovery-password";

const App = () => {
  const { theme } = useContext(UserContext);
  const { open, setOpen } = useContext(ProductContext);

  return (
    <main className={`${theme === "light" ? "light" : "dark"} overflow-x-hidden`}>
      <ProdutModal isOpen={open} onClose={() => setOpen(false)} />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/123" replace={true} />} />
          {/* ADMIN */}
          <Route path="/:storeId/admin" element={<Admin />}>
            {/* LOGIN */}
            <Route path="" element={<AdminLogin />} />
            {/* DASHBOARD */}
            <Route path="painel" element={<Dashboard />} />
            {/* BILLBOARDS */}
            <Route path="destaques" element={<Billboards />} />
            <Route path="destaques/nova" element={<BillboardsForm />} />
            <Route path="destaques/:billboardId" element={<BillboardsForm />} />
            {/* CATEGORIES */}
            <Route path="categorias" element={<Categories />} />
            <Route path="categorias/nova" element={<CategoriesForm />} />
            <Route path="categorias/:categoryId" element={<CategoriesForm />} />
            {/* PRODUCTS */}
            <Route path="produtos" element={<Products />} />
            <Route path="produtos/nova" element={<ProductsForm />} />
            <Route path="produtos/:productId" element={<ProductsForm />} />
            {/* ORDERS */}
            <Route path="pedidos" element={<Orders />} />
            <Route path="pedidos/nova" element={<OrdersForm />} />
            {/* CUSTOMERS */}
            <Route path="clientes" element={<Customers />} />
            <Route path="clientes/nova" element={<CustomersForm />} />
            <Route path="clientes/:customerId" element={<CustomersForm />} />
            {/* BARTENDINGS */}
            <Route path="mesas" element={<Bartendings />} />
            <Route path="mesas/nova" element={<BartendingsForm />} />
            {/* SETTINGS */}
            <Route path="configuracoes" element={<Settings />} />
            {/* RECOVERY PASSWORD */}
            <Route path="recuperar-senha" element={<AdminRecoveryPassword />} />
          </Route>

          {/* STORE */}
          <Route path="/:storeId" element={<Web />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<WebLogin />} />
            <Route path="perfil" element={<Profile />} />
            <Route path="recuperar-senha" element={<WebRecoveryPassword />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
