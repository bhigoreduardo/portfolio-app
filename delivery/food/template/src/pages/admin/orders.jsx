import { Link } from "react-router-dom";

import { order } from "@/utils/data";
import { currencyPrice } from "@/utils/transform";
import { orderEnum } from "@/types/order";
import Select from "@/components/ui/inputs/select";
import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import TableData from "@/components/ui/tables/table-data";

const data = new Array(16).fill(order);
const columns = [
  {
    accessorKey: "customer",
    header: "Cliente",
    cell: ({ row }) => (
      <div className="flex flex-col justify-center">
        <span className="mb-0 text-sm leading-normal dark:text-white">{row.original?.customer?.name}: {row.original?.customer?.mobile}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Busca:</b> {row.original?.shipping?.method}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Rua:</b> {row.original?.customer?.address?.street}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Bairro - Número:</b> {row.original?.customer?.address?.neighborhood} - {row.original?.customer?.address?.number}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Cidade - Estado:</b> {row.original?.customer?.address?.city} - {row.original?.customer?.address?.state}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>CEP:</b> {row.original?.customer?.address?.zipCode}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Complemento:</b> {row.original?.customer?.address?.complement}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Taxa:</b> {currencyPrice.format(row.original?.shipping?.price)}</span>
      </div>
    )
  },
  {
    accessorKey: "cart",
    header: "Carrinho",
    cell: ({ row }) => row.original.cart?.map((item, i) => (
      <div key={i} className="flex">
        <div className="w-1/4">
          <img src={item?.product?.image} className="flex items-center justify-center text-sm font-semibold h-8 w-8 rounded-full" />
        </div>
        <div className="flex flex-col justify-center w-3/4">
          <span className="mb-0 text-sm leading-normal dark:text-white"><b>{item?.product?.name}:</b> {item.quantity} unids</span>
          <span className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400"><b>Preço:</b> {currencyPrice.format(item.price)}</span>
        </div>
      </div>
    ))
  },
  {
    accessorKey: "payment",
    header: "Pagamento",
    cell: ({ row }) => (
      <div className="flex flex-col justify-center">
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Método:</b> {row.original?.payment?.method}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Total:</b> {currencyPrice.format(row.original?.payment?.amount)}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Troco:</b> {currencyPrice.format(row.original?.payment?.moneyChange)}</span>
        <span className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400"><b>Status:</b> {row.original?.payment?.status}</span>
      </div>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex flex-col justify-center">
        <Select name="status" placeholder="Sem status" data={orderEnum} onChange={(e) => console.log(e.target.value)} value={row.original?.status?.type} disabled={row.original?.status?.type === "delivered"} className="mb-2" />
        <span className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400"><b>Hora:</b> {row.original?.status?.dateTime}</span>
      </div>
    )
  },
  {
    accessorKey: "payload",
    header: "Observações",
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: () => <Button className="text-slate-700 bg-white"><i className="fas fa-file-pdf mr-2"></i>Imprimir</Button>
  },
];

const Orders = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title="Pedidos (40)" description="Gerenciar pedidos para sua loja" />
        <Link to="nova">
          <Button className="text-slate-700 bg-white"><i className="fas fa-plus mr-2"></i>Adicionar</Button>
        </Link>
      </div>
      <TableData searchKey="customer" columns={columns} data={data} />
      <div className="overflow-x-auto">
      </div>
    </>
  );
};

export default Orders;
