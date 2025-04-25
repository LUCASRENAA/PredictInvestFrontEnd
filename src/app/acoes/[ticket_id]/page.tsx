// pages/acoes/[ticket_id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import IndicadorDetalhe from '../../components/IndicadorDetalhe';
import { indicadoresType } from '../../types/indicadores';

export default function PaginaDetalhesAcao() {
  const { ticket_id } = useParams();
  const [dados, setDados] = useState<indicadoresType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/ticket_atualizacao/${ticket_id}/`);
        setDados(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    if (ticket_id) fetchDados();
  }, [ticket_id]);

  return (
    <main className="p-10 max-w-4xl mx-auto">
      {loading ? (
        <p className="text-center text-gray-500">Carregando...</p>
      ) : dados ? (
        <>
          {/* Título e informações gerais */}
          <h1 className="text-3xl font-semibold text-blue-800 mb-6">Detalhes da Ação: {dados.name}</h1>
          <div className="text-gray-500 mb-6">
            <p>Última atualização em: </p>
          </div>
          {/* Componente IndicadorDetalhe exibe todos os dados financeiros da ação */}
          <IndicadorDetalhe indicador={dados} />
        </>
      ) : (
        <p className="text-center text-red-500">Ação não encontrada.</p>
      )}
    </main>
  );
}
