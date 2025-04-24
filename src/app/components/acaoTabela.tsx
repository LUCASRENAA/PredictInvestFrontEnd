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
import { acaoType } from "../types/acao";
import Link from 'next/link';

interface TabelaProps {
    acoes: acaoType[];
}

const AcaoTabela: React.FC<TabelaProps> = ({ acoes }) => {
    const [filterValue, setFilterValue] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [sortColumn, setSortColumn] = useState<"name" | "ticket">("name");

    const handleSort = (column: "name" | "ticket") => {
        setSortColumn(column);
        setSortOrder(sortColumn === column && sortOrder === "asc" ? "desc" : "asc");
    };

    const filteredItems = useMemo(() => {
        const searchTerms = filterValue.trim().toLowerCase().split(" ");
        return acoes.filter(
            (acao) =>
                searchTerms.every(
                    (term) =>
                        acao.name.toLowerCase().includes(term) ||
                        acao.ticket_id.toLowerCase().includes(term)
                )
        );
    }, [acoes, filterValue]);

    const sortedItems = useMemo(() => {
        return [...filteredItems].sort((a, b) => {
            const valueA = sortColumn === "name" ? a.name.toLowerCase() : a.ticket_id.toLowerCase();
            const valueB = sortColumn === "name" ? b.name.toLowerCase() : b.ticket_id.toLowerCase();

            return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        });
    }, [filteredItems, sortColumn, sortOrder]);

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Tabela de Ações</h1>
            <Input
                type="text"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                placeholder="Filtrar por nome ou ticket..."
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
                    <TableColumn
                        className="w-[30%] px-8 py-2 font-semibold text-sm text-gray-800 cursor-pointer hover:text-blue-500 transition-colors"
                        onClick={() => handleSort("ticket")}
                    >
                        TICKET
                        {sortColumn === "ticket" && (
                            <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>
                        )}
                    </TableColumn>
                    <TableColumn
                        className="w-[70%] px-8 py-2 font-semibold text-sm text-gray-800 cursor-pointer hover:text-blue-500 transition-colors"
                        onClick={() => handleSort("name")}
                    >
                        NOME
                        {sortColumn === "name" && (
                            <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>
                        )}
                    </TableColumn>
                </TableHeader>
                <TableBody
                    items={sortedItems}
                    loadingContent={<Spinner color="default" />}
                    emptyContent={<span className="text-gray-600 text-center">Nenhuma linha para exibir.</span>}
                >
                    {(acao) => (
                        <TableRow
                            key={acao.id}
                            className="hover:bg-blue-50 text-gray-700 transition-colors"
                        >
                            <TableCell className="w-[30%] px-4 py-2 text-sm font-medium text-gray-900">
                            <Link href={`/acoes/`}>{acao.name}</Link>
                            </TableCell>
                            <TableCell className="w-[70%] px-4 py-2 text-sm text-gray-700">
                                {acao.name}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AcaoTabela;
