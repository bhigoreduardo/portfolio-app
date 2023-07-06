import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import api from "@/libs/api";
import Button from "@/components/ui/button";
import Cart from "@/components/ui/cart";
import Checkout from "@/components/ui/checkout";

const WebNavbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [categories, setCategories] = useState([]);
  const spliPath = pathname.split("/")[3];
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const getCategories = async () => {
    const { data } = await api.get(`/categories`);
    setCategories(data);
  }
  useEffect(() => {
    getCategories();
  }, [])

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 flex sm:h-16 h-auto flex-col sm:flex-row gap-3 py-4 items-center border-b dark:border-slate-800">
      <Link to="" className="ml-4 flex lg:ml-0 gap-x-2 dark:text-slate-400 hover:dark:text-white hover:text-slate-900">
        <p className="font-bold text-xl uppercase">Loja</p>
      </Link>
      

      <nav className={`${openMobileMenu ? "sm:right-0 -right-2 opacity-100 text-center" : "translate-x-full opacity-0"} md:static absolute md:translate-x-0 md:opacity-100 md:w-fit w-[70%] md:rounded-none rounded-md mx-6 md:py-0 py-10 md:top-0 top-full md:bg-transparent flex items-center md:gap-2 gap-5 md:flex-row flex-col space-x-4 lg:space-x-6 md:backdrop-blur-0 md:shadow-none backdrop-blur-md shadow-md z-50`}>
        {categories?.map((item, i) => (
          <button key={i} className={`${spliPath === item.toLowerCase() ? "text-black" : "text-neutral-500"} text-sm font-medium transition-colors hover:text-black dark:hover:text-white`}>
            {item}
          </button>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-x-4">
      <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden block text-sm font-semibold h-8 w-8 rounded-md text-slate-500 transition-all">
        {openMobileMenu ? (<i className="fas fa-times"></i>) : (<i className="fa fa-bars"></i>)}
      </button>
        <Button type="button" onClick={() => setShowCart(true)} className="bg-slate-900 dark:bg-slate-600 h-10">
          <i className="fa fa-shopping-cart text-white text-sm"></i>
          <span className="ml-2 text-sm font-medium text-white">5</span>
        </Button>
        <Button className="bg-slate-900 dark:bg-slate-600 h-10" onClick={() => navigate("login")}>
          <i className="fa fa-user text-white text-sm"></i>
        </Button>
      </div>

      {showCart && <Cart setShowCart={setShowCart} setShowCheckout={setShowCheckout} />}
      {showCheckout && <Checkout setShowCheckout={setShowCheckout} />}
    </div>
  );
};

export default WebNavbar;
