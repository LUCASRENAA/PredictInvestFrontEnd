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
        <div className="p-6 h-screen bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
            {/* Search Bar */}
            <div className="w-full h-20 relative bg-white dark:bg-gray-700 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 mb-6 flex items-center justify-center">
                {/* Input de busca */}
                <div className="flex-1 max-w-[85%] h-10 bg-white dark:bg-gray-800 rounded-lg outline outline-1 outline-gray-200 dark:outline-gray-600 flex items-center px-4">
                    <Input
                        type="text"
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        placeholder="Buscar ação..."
                        className="w-full bg-transparent text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-base font-normal focus:outline-none"
                    />
                </div>
                {/* Filtro de setores */}
                <div className="w-44 h-10 ml-4 bg-white dark:bg-gray-800 rounded-lg outline outline-1 outline-gray-200 dark:outline-gray-600 flex items-center px-4">
                    <span className="text-gray-700 dark:text-gray-200 text-base font-normal">Todos os setores</span>
                </div>
            </div>
            {/* Table */}
            <Table
                isHeaderSticky
                classNames={{
                    base: "overflow-scroll max-h-[85%] rounded-lg shadow-md bg-white dark:bg-gray-700",
                    table: "min-h-min",
                }}
            >
                <TableHeader>
                    <TableColumn
                        className="w-[30%] px-8 py-2 font-semibold text-sm text-gray-800 dark:text-gray-200 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        onClick={() => handleSort("ticket")}
                    >
                        TICKET
                        {sortColumn === "ticket" && (
                            <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>
                        )}
                    </TableColumn>
                    <TableColumn
                        className="w-[70%] px-8 py-2 font-semibold text-sm text-gray-800 dark:text-gray-200 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
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
                    emptyContent={<span className="text-gray-600 dark:text-gray-400 text-center">Nenhuma linha para exibir.</span>}
                >
                    {(acao) => (
                        <TableRow
                            key={acao.id}
                            className="hover:bg-blue-50 dark:hover:bg-blue-800 text-gray-800 dark:text-gray-100 transition-colors"
                        >
                            <TableCell className="w-[30%] px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                                <Link href={`/acoes/`}>{acao.ticket_id}</Link>
                            </TableCell>
                            <TableCell className="w-[70%] px-4 py-2 text-sm text-gray-800 dark:text-gray-100">
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
