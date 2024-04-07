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

interface TabelaProps {
    acoes: acaoType[];
}

const AcaoTabela: React.FC<TabelaProps> = ({ acoes }) => {
    const [filterValue, setFilterValue] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [sortColumn, setSortColumn] = useState<"name" | "ticket">("name");

    // Função genérica para lidar com a ordenação ao clicar em uma coluna
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
                        acao.ticket.toLowerCase().includes(term)
                )
        );
    }, [acoes, filterValue]);

    const sortedItems = useMemo(() => {
        return [...filteredItems].sort((a, b) => {
            const valueA = sortColumn === "name" ? a.name.toLowerCase() : a.ticket.toLowerCase();
            const valueB = sortColumn === "name" ? b.name.toLowerCase() : b.ticket.toLowerCase();

            return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        });
    }, [filteredItems, sortColumn, sortOrder]);

    return (
        <div>
            <Input
                type="text"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                placeholder="Filtrar por nome..."
                className="w-max px-3 py-1 mb-2 border bg-neutral-100 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
            />
            <Table
                isHeaderSticky
                classNames={{
                    base: "overflow-scroll max-h-96 rounded-lg shadow-md bg-neutral-100",
                    table: "min-h-min",
                }}
            >
                <TableHeader>
                    <TableColumn
                        className="w-[30%] px-8 py-2 font-semibold text-sm text-gray-800 cursor-pointer"
                        onClick={() => handleSort("ticket")}
                    >
                        TICKET
                        {sortColumn === "ticket" && (
                            <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>
                        )}
                    </TableColumn>
                    <TableColumn
                        className="w-[80%] px-8 py-2 font-semibold text-sm text-gray-800 cursor-pointer"
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
                        <TableRow key={acao.id} className="hover:bg-neutral-200 text-gray-700">
                            <TableCell className="w-[30%] px-4 py-2 text-sm">{acao.ticket}</TableCell>
                            <TableCell className="w-[80%] px-4 py-2 text-sm">{acao.name}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AcaoTabela;
