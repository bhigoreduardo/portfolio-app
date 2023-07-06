import { useEffect, useState } from "react";

import api from "@/libs/api";
import CardProductList from "@/components/ui/cards/card-product-list";

const Home = () => {
  const [products, setProducts] = useState([]);
  
  const getProducts = async () => {
    const { data } = await api.get(`/products`);
    setProducts(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {/* BILLBOARD */}
      <div className="p-4 sm:p-6 lg:p-8 rounded-md overflow-hidden">
        <div className="rounded-md relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-[url('/images/hero.png')]">
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
              Banner com Texto de destaque
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <CardProductList title="Lanches" products={new Array(5).fill(products[0])} />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <CardProductList title="Pizzas" products={new Array(5).fill(products[1])} />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <CardProductList title="Bebidas" products={new Array(5).fill(products[2])} />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <CardProductList title="Sorvetes" products={new Array(5).fill(products[3])} />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <CardProductList title="Açaí" products={new Array(5).fill(products[4])} />
        </div>
      </div>
    </>
  );
};

export default Home;
