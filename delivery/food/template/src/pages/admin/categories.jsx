import { Link } from "react-router-dom";

import { category } from "@/utils/data";
import { TableActionCell } from "@/components/ui/tables/table-action-cell";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";
import TableData from "@/components/ui/tables/table-data";

const data = new Array(15).fill(category);
const columns = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "status",
    header: "Disponível",
  },
  {
    accessorKey: "products",
    header: "Produtos",
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => <TableActionCell data={row.original} />
  },
];

const Categories = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title="Categorias (15)" description="Gerenciar categorias para sua loja" />
        <Link to="nova">
          <Button className="text-slate-700 bg-white"><i className="fas fa-plus mr-2"></i>Adicionar</Button>
        </Link>
      </div>
      <TableData searchKey="name" columns={columns} data={data} />
    </>
  );
};

export default Categories;
