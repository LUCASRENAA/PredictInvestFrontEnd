import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner } from "@nextui-org/react";
import { acaoType } from "../types/acao";

interface TabelaProps {
    acoes: acaoType[];
}

const AcaoTabela: React.FC<TabelaProps> = ({ acoes }) => {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <Table
            isHeaderSticky
            classNames={{
                base: "overflow-scroll rounded-lg shadow-md bg-neutral-100",
                table: "min-h-[80%]",
            }}
        >
            <TableHeader>
                <TableColumn className="px-4 py-2 font-semibold text-sm text-gray-800">TICKET</TableColumn>
                <TableColumn className="px-4 py-2 font-semibold text-sm text-gray-800">SETOR</TableColumn>
            </TableHeader>
            <TableBody
                isLoading={isLoading}
                items={acoes}
                loadingContent={<Spinner color="default" />}
                emptyContent={<span className="text-gray-600 text-center">Nenhuma linha para exibir.</span>}
            >
                {(acao) => (
                    <TableRow key={acao.id} className="hover:bg-neutral-200 text-gray-700">
                        <TableCell className="px-4 py-2 text-sm">{acao.name}</TableCell>
                        <TableCell className="px-4 py-2 text-sm">{acao.setor}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default AcaoTabela;