import { acaoType } from "../types/acao";

export default function AcaoTabela({ acao }: { acao: acaoType }) {
    return (
        <div className="flex flex-row justify-between whitespace-nowrap px-6 py-3">
            <span className="font-medium w-1/2">{acao.name}</span>
            <span className="font-medium w-1/2">{acao.setor}</span>
        </div>
    );
}