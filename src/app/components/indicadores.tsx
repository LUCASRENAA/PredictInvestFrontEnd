"use client";
import Link from 'next/link';

import React, { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Input,
} from "@nextui-org/react";
import { indicadoresType } from "../types/indicadores";

interface Props {
  indicadores: indicadoresType[];
}

const IndicadoresTabela: React.FC<Props> = ({ indicadores }) => {
  const [filterValue, setFilterValue] = useState("");

  const filteredItems = useMemo(() => {
    const searchTerms = filterValue.trim().toLowerCase().split(" ");
    return indicadores.filter((item) =>
      searchTerms.every((term) =>
        item.name.toLowerCase().includes(term)
      )
    );
  }, [indicadores, filterValue]);

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Indicadores</h1>
      <Input
        type="text"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        placeholder="Filtrar por nome da ação..."
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      />

      <Table
        isHeaderSticky
        classNames={{
          base: "overflow-scroll max-h-96 rounded-lg shadow-md bg-white",
          table: "min-h-min",
        }}
      >
        <TableHeader>
          <TableColumn className="w-[25%] px-8 py-2 font-semibold text-sm text-gray-800">
            TICKET
          </TableColumn>
          <TableColumn className="w-[15%] px-8 py-2 font-semibold text-sm text-gray-800">
            VALOR ATUAL
          </TableColumn>
          <TableColumn className="w-[15%] px-8 py-2 font-semibold text-sm text-gray-800">
            P/L
          </TableColumn>
          <TableColumn className="w-[15%] px-8 py-2 font-semibold text-sm text-gray-800">
            ROE
          </TableColumn>
          <TableColumn className="w-[20%] px-8 py-2 font-semibold text-sm text-gray-800">
            MARGEM LÍQUIDA
          </TableColumn>
        </TableHeader>

        <TableBody
          items={filteredItems}
          loadingContent={<Spinner color="default" />}
          emptyContent={<span className="text-gray-600 text-center">Nenhuma linha para exibir.</span>}
        >
          {(item) => (
            <TableRow key={item.id} className="hover:bg-blue-50 text-gray-700 transition-colors">
              <TableCell className="p-2 text-blue-700 hover:underline">
                <Link href={`/acoes/${item.id}`}>{item.name}</Link>
                </TableCell>

              <TableCell className="px-4 py-2 text-sm text-gray-700">
                {item.valor_atual}
              </TableCell>
              <TableCell className="px-4 py-2 text-sm text-gray-700">
                {item.pl}
              </TableCell>
              <TableCell className="px-4 py-2 text-sm text-gray-700">
                {item.roe}
              </TableCell>
              <TableCell className="px-4 py-2 text-sm text-gray-700">
                {item.margem_liquida}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default IndicadoresTabela;
