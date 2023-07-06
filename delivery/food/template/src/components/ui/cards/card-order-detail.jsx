/* eslint-disable react/prop-types */
import { currencyPrice } from "@/utils/transform";
import { orderEnum } from "@/types/order";
import Select from "../inputs/select";
import Button from "../button";

const CardOrderDetail = ({ customer, shipping, cart, status }) => {
  return (
    <div className="flex items-center justify-between py-2 px-2 mb-2 border-0 w-full rounded-md">
      <div className="flex flex-col justify-center w-3/5">
        <span className="mb-0 text-sm leading-normal dark:text-white">{customer?.name}: {customer?.mobile}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Busca:</b> {shipping?.method}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Rua:</b> {customer?.address?.street}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Bairro - Número:</b> {customer?.address?.neighborhood} - {customer?.address?.number}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Cidade - Estado:</b> {customer?.address?.city} - {customer?.address?.state}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>CEP:</b> {customer?.address?.zipCode}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Complemento:</b> {customer?.address?.complement}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Taxa:</b> {currencyPrice.format(shipping?.price)}</span>
      </div>
      <div className="flex flex-col justify-center w-3/5">
        {cart?.map((item, i) => (
          <div key={i} className="flex">
            <div className="w-1/4">
              <img src={item?.product?.image} className="flex items-center justify-center text-sm font-semibold h-8 w-8 rounded-full" />
            </div>
            <div className="flex flex-col justify-center w-3/4">
              <span className="mb-0 text-sm leading-normal dark:text-white"><b>{item?.product?.name}:</b> {item.quantity} unids</span>
              <span className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400"><b>Preço:</b> {currencyPrice.format(item.price)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center">
        <Select name="status" placeholder="Sem status" data={orderEnum} onChange={(e) => console.log(e.target.value)} value={status?.type} disabled={status?.type === "delivered"} className="mb-2" />
        <span className="mb-4 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400"><b>Hora:</b> {status?.dateTime}</span>
        <Button className="text-slate-700 bg-white">
          <i className="fas fa-file-pdf mr-2"></i>Imprimir
        </Button>
      </div>
    </div>
  );
};

export default CardOrderDetail;
