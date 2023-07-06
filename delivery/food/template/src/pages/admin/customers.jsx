import { Link } from "react-router-dom";

import { customer } from "@/utils/data";
import { TableActionCell } from "@/components/ui/tables/table-action-cell";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";
import TableData from "@/components/ui/tables/table-data";

const data = new Array(16).fill(customer);
const columns = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mobile",
    header: "Telefone",
  },
  {
    accessorKey: "address",
    header: "Endereço",
    cell: ({ row }) => (
      <div className="flex flex-col justify-center">
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Rua:</b> {row.original?.address?.street}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Bairro - Número:</b> {row.original?.address?.neighborhood} - {row.original?.address?.number}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Cidade - Estado:</b> {row.original?.address?.city} - {row.original?.address?.state}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>CEP:</b> {row.original?.address?.zipCode}</span>
        <span className="mb-0 text-sm leading-normal dark:text-white"><b>Complemento:</b> {row.original?.address?.complement}</span>
      </div>
    )
  },
  {
    accessorKey: "status",
    header: "Disponível",
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => <TableActionCell data={row.original} />
  },
];

const Customers = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title="Clientes (20)" description="Gerenciar clientes para sua loja" />
        <Link to="nova">
          <Button className="text-slate-700 bg-white"><i className="fas fa-plus mr-2"></i>Adicionar</Button>
        </Link>
      </div>
      <TableData searchKey="name" columns={columns} data={data} />
    </>
  );
};

export default Customers;
