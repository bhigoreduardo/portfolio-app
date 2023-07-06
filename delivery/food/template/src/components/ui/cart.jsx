/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { products } from "@/utils/data";
import CartItem from "./cart-item";

const Cart = ({ setShowCart, setShowCheckout }) => {
  return (
    <section className="fixed top-0 left-0 flex justify-end bg-[#00000080] w-full h-full z-50">
      <article className="relative flex flex-col bg-[#fff] text-[#000] min-w-[250px] max-w-[300px]">
        <div className="flex items-center justify-end px-5 py-4 border-b border-[#0000001a]">
          <span className="text-lg font-semibold uppercase flex-grow">Carrinho</span>
          <span onClick={() => setShowCart(false)} className="flex items-center gap-1 uppercase text-sm cursor-pointer hover:opacity-50">
            <i className="fas fa-times text-lg mr-2"></i>Fechar
          </span>
        </div>

        {
          !products?.length > 0
            ? (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
                <i className="far fa-times-circle text-[120px] opacity-10"></i>
                <span className="text-sm">Não tem produtos no seu carrinho</span>
                <Link to="" onClick={() => setShowCart(false)} className="flex items-center justify-center h-10 w-40 text-sm text-[#fff] bg-[#8e2de2]">
                  Voltar pra loja
                </Link>
              </div>
            ) : (
              <>
              <div className="flex flex-grow flex-col justify-between px-5 py-4 overflow-y-auto scrollbar-none">
                <div className="flex flex-col gap-3">
                  {products.map((item, i) => (
                    <CartItem key={i} {...item} />
                  ))}
                </div>
              </div>

              <div className="border-t border-[#0000001a] p-5">
                {/* NOT OK */}
                {/* <span className="text-sm">
                  Mínimo R$30,00 para pedidos via delivery. Adicione mais produtos no carrinho para poder concluir a compra!
                </span> */}

                {/* NOT AUTH */}
                {/* <button type="button" className="h-12 w-full mt-5 text-base text-[#fff] bg-[#8e2de2] rounded-md uppercase hover:opacity-60">
                  Acessar conta
                </button> */}

                {/* AUTH AND OK */}
                <span className="text-xs">Tempo médido de entrega: 40-60min</span>

                <div className="flex items-center justify-between font-semibold uppercase">
                  <span className="text-sm">
                    Subtotal:
                  </span>
                  <span className="text-xl text-[#8e2de2]">
                    R$ 140,00
                  </span>
                </div>

                <button type="button" onClick={() => {setShowCart(false), setShowCheckout(true)}} className="h-12 w-full mt-5 text-base text-[#fff] bg-[#8e2de2] rounded-md uppercase hover:opacity-60">
                  Finalizar compra
                </button>
              </div>
              </>
            )
        }
      </article>
    </section>
  );
};

export default Cart;
