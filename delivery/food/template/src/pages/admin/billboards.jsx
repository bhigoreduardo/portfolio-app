import { Link } from "react-router-dom";

import { billboard } from "@/utils/data";
import { TableActionCell } from "@/components/ui/tables/table-action-cell";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";
import TableData from "@/components/ui/tables/table-data";

const data = new Array(2).fill(billboard);
const columns = [
  {
    accessorKey: "image",
    header: "Imagem",
    cell: ({ row }) => <img src={row.original?.image} className="bg-white h-20 w-20 rounded-xl" />
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => <TableActionCell data={row.original} />
  },
];

const Billboards = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title="Destaques (2)" description="Adicione até 3 destaques para sua loja" />
        <Link to="nova">
          <Button className="text-slate-700 bg-white"><i className="fas fa-plus mr-2"></i>Adicionar</Button>
        </Link>
      </div>
      <TableData searchKey="description" columns={columns} data={data} />
    </>
  );
};

export default Billboards;
