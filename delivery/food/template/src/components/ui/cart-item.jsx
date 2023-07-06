/* eslint-disable react/prop-types */
const CartItem = ({ image, name, promotion, price }) => {
  return (
    <div className="relative flex items-center gap-2 p-1 hover:bg-[#0000000d]">
      <div className="bg-[#0000000d] h-16 w-16 flex-shrink-0">
        <img src={image} className="w-full h-full rounded-lg" />
      </div>

      <div className="flex flex-col">
        <span className="text-base font-semibold text-ellipsis">{name}</span>
        <p className="text-sm font-semibold">Adicionais:</p>
        <span className="text-xs">1 - Sachê de Molho Romã</span>
        <span className="text-xs">2 - Saquinho de Creme de Alho</span>
        <span className="text-xs">2 - Mussarela</span>
        <p className="text-sm font-semibold">Observação:</p>
        <span className="text-xs">Retirar a cebola, sem maionese caseira e pouco carne de porco</span>


        <div className="flex items-center space-x-2 w-fit bg-white p-2 rounded-md shadow-md">
          <button type="button">
            <i className="fas fa-minus text-red-600 h-4 w-4"></i>
          </button>

          <span>5</span>

          <button type="button">
            <i className="fas fa-plus text-[#00ccbb] h-4 w-4"></i>
          </button>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <span>6</span>
          <span>x</span>
          <span>R${promotion || price}</span>
        </div>

        <span className="text-[#8e2de2]">
          R$60,00
        </span>
      </div>
    </div>
  );
};

export default CartItem;
