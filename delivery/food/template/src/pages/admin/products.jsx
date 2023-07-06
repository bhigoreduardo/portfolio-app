import { Link } from "react-router-dom";

import { product } from "@/utils/data";
import { TableActionCell } from "@/components/ui/tables/table-action-cell";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";
import TableData from "@/components/ui/tables/table-data";

const data = new Array(16).fill(product);
const columns = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => <img src={row.original.image} className="flex items-center justify-center text-sm font-semibold h-8 w-8 rounded-full" />
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "price",
    header: "Preço",
  },
  {
    accessorKey: "promotion",
    header: "Promoção",
  },
  {
    accessorKey: "status",
    header: "Disponível",
  },
  {
    accessorKey: "reviewsAvg",
    header: "Revisões",
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => <TableActionCell data={row.original} />
  },
];

const Products = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title="Produtos (40)" description="Gerenciar produtos para sua loja" />
        <Link to="nova">
          <Button  className="text-slate-700 bg-white"><i className="fas fa-plus mr-2"></i>Adicionar</Button>
        </Link>
      </div>
      <TableData searchKey="name" columns={columns} data={data} />
    </>
  );
};

export default Products;
