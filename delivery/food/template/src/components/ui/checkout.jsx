/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { CheckoutModal } from "./modals/modal-checkout";
import Button from "./button";
import Radiobox from "./inputs/radiobox";

const Checkout = ({ setShowCheckout }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <CheckoutModal isOpen={open} onClose={() => setOpen(false)} />
      <section className="fixed top-0 left-0 flex justify-end bg-[#00000080] w-full h-full z-50">
        <article className="relative flex flex-col bg-[#fff] text-[#000] min-w-[250px] max-w-[300px]">
          <div className="flex items-center justify-end px-5 py-4 border-b border-[#0000001a]">
            <span className="text-lg font-semibold uppercase flex-grow">Finalizar compra</span>
            <span onClick={() => setShowCheckout(false)} className="flex items-center gap-1 uppercase text-sm cursor-pointer hover:opacity-50">
              <i className="fas fa-times text-lg mr-2"></i>Fechar
            </span>
          </div>

          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
            <i className="far fa-times-circle text-[120px] opacity-10"></i>
            <span className="text-sm">Não tem produtos no seu carrinho</span>
            <Link to="/" onClick={() => setShowCart(false)} className="flex items-center justify-center h-10 w-40 text-sm text-[#fff] bg-[#8e2de2]">
              Voltar pra loja
            </Link>
          </div> */}

          <div className="flex flex-grow flex-col gap-6 px-5 py-4 overflow-y-auto scrollbar-none">
            <div>
              <p className="text-base font-semibold mb-4">Endereço:</p>
              <div className="flex items-center gap-2 mb-4">
                <i className="fas fa-map-marker-alt w-4 h-4"></i>
                <div className="flex flex-col justify-center">
                  <span className="mb-0 text-sm leading-normal"><b>Rua:</b> Rua do John Doe</span>
                  <span className="mb-0 text-sm leading-normal"><b>Bairro - Número:</b> Bairro - 123</span>
                  <span className="mb-0 text-sm leading-normal"><b>Cidade - Estado:</b> Rio de Janeiro - RJ</span>
                  <span className="mb-0 text-sm leading-normal"><b>CEP:</b> 123456-789</span>
                  <span className="mb-0 text-sm leading-normal"><b>Complemento:</b> Perto da casa</span>
                </div>
              </div>
              <Button className="text-xs bg-slate-800 text-white" onClick={() => {setShowCheckout(false); navigate(`perfil`)}}>Atualizar endereço</Button>
            </div>

            <div>
              <p className="text-base font-semibold mb-4">Pagamento:</p>
              <div className="flex items-center justify-between font-semibold uppercase">
                <span className="text-sm">
                  Entrega:
                </span>
                <span className="text-xl text-[#8e2de2]">
                  R$ 10,00
                </span>
              </div>
              <span className="text-xs">Formas de pagamento:</span>
              <div className="flex flex-col gap-1">
                <Radiobox name="payment">PIX</Radiobox>
                <Radiobox name="payment">Crédito - VISA</Radiobox>
                <Radiobox name="payment">Crédito - MASTERCARD</Radiobox>
                <Radiobox name="payment">Dinheiro</Radiobox>
              </div>
            </div>
          </div>

          <div className="border-t border-[#0000001a] p-5">
            <span className="text-xs">Tempo médido de entrega: 40-60min</span>

            <div className="flex items-center justify-between font-semibold uppercase">
              <span className="text-sm">
                Subtotal:
              </span>
              <span className="text-xl text-[#8e2de2]">
                R$ 140,00
              </span>
            </div>

            <button type="button" onClick={() => {setOpen(true)}} className="h-12 w-full mt-5 text-base text-[#fff] bg-[#8e2de2] rounded-md uppercase hover:opacity-60">
              Fazer pedido
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Checkout;
