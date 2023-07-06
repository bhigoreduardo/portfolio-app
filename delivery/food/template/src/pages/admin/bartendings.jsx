import { Link } from "react-router-dom";

import { bartending } from "@/utils/data";
import { currencyPrice } from "@/utils/transform";
import { bartendingEnum } from "@/types/bartending";
import Select from "@/components/ui/inputs/select";
import { TableProductCell } from "@/components/ui/tables/table-product-ceil";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";
import TableData from "@/components/ui/tables/table-data";

const data = new Array(5).fill(bartending);
const columns = [
  {
    accessorKey: "name",
    header: "Nome",
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex flex-col justify-center">
        <Select name="status" placeholder="Sem status" data={bartendingEnum} onChange={(e) => console.log(e.target.value)} value={row.original?.status?.type} disabled={row.original?.status?.type === "delivered"} className="mb-2" />
        <span className="mb-4 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400"><b>Hora:</b> {row.original?.status?.dateTime}</span>
        <TableProductCell data={row.original} />
      </div>
    )
  },
  // {
  //   accessorKey: "actions",
  //   header: "Ações",
  //   cell: () => <Button content={<><i className="	fas fa-cart-plus mr-2"></i>Adicionar produto</>} className="text-slate-700 bg-white" />
  // },
];


const Bartendings = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title="Mesas (10)" description="Gerenciar mesas para sua loja" />
        <Link to="nova">
          <Button className="text-slate-700 bg-white"><i className="fas fa-plus mr-2"></i>Adicionar</Button>
        </Link>
      </div>
      <TableData searchKey="name" columns={columns} data={data} />
    </>
  );
};

export default Bartendings;
