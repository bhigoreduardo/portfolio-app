/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Input from "../inputs/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";
import Button from "../button";

const TableData = ({ searchKey, columns, data }) => {
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: { columnFilters },
  });

  return (
    <div>
      <Input placeholder="Procurar" value={(table.getColumn(searchKey)?.getFilterValue()) ?? ""} onChange={(e) => table.getColumn(searchKey)?.setFilterValue(e.target.value)} className="max-w-sm mb-4" />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups()?.map((item, i) => (
              <TableRow key={i}>
                {item.headers?.map((value, key) => (
                  <TableHead key={key}>
                    {value.isPlaceholder
                      ? null
                      : flexRender(
                        value.column.columnDef.header,
                        value.getContext()
                      )
                    }
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length
              ? (
                table.getRowModel().rows.map((item, i) => (
                  <TableRow key={i} data-state={item.getIsSelected() && "selected"}>
                    {item.getVisibleCells().map((value, key) => (
                      <TableCell key={key}>
                        {flexRender(value.column.columnDef.cell, value.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    Sem resultados
                  </TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button className="dark:text-gray-300 text-slate-700 dark:border-gray-500 border-slate-700" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Voltar
        </Button>
        <Button className="dark:text-gray-300 text-slate-700 dark:border-gray-500 border-slate-700" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Avançar
        </Button>
      </div>
    </div>
  );
};

export default TableData;
