import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner } from "@nextui-org/react";
import { acaoType } from "../types/acao";

interface TabelaProps {
    acoes: acaoType[];
}

const AcaoTabela: React.FC<TabelaProps> = ({ acoes }) => {
    const [filterValue, setFilterValue] = React.useState("");

    const filteredItems = React.useMemo(() => {
        let filteredAcoes = [...acoes];

        if (filterValue.trim() !== "") {
            const searchTerms = filterValue.toLowerCase().split(" ");
            filteredAcoes = filteredAcoes.filter((acao) =>
                searchTerms.every((term) =>
                    acao.name.toLowerCase().includes(term) ||
                    acao.ticket.toLowerCase().includes(term)
                )
            );
        }

        return filteredAcoes;
    }, [acoes, filterValue]);

    return (
        <div>
            <input
                type="text"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                placeholder="Filtrar por nome..."
                className="px-3 py-1 mt-4 mb-2 border bg-neutral-100 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-700"
            />
            <Table
                isHeaderSticky
                classNames={{
                    base: "overflow-scroll max-h-96 rounded-lg shadow-md bg-neutral-100",
                    table: "min-h-min",
                }}
            >
                <TableHeader>
                    <TableColumn className="px-4 py-2 font-semibold text-sm text-gray-800">TICKET</TableColumn>
                    <TableColumn className="px-4 py-2 font-semibold text-sm text-gray-800">NOME</TableColumn>
                </TableHeader>
                <TableBody
                    items={filteredItems} // Use filteredItems ao invés de acoes
                    loadingContent={<Spinner color="default" />}
                    emptyContent={<span className="text-gray-600 text-center">Nenhuma linha para exibir.</span>}
                >
                    {(acao) => (
                        <TableRow key={acao.id} className="hover:bg-neutral-200 text-gray-700">
                            <TableCell className="px-4 py-2 text-sm">{acao.ticket}</TableCell>
                            <TableCell className="px-4 py-2 text-sm">{acao.name}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AcaoTabela;
