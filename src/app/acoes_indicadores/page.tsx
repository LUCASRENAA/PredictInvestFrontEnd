'use client';

import React, { useState, useEffect } from 'react';
import { indicadoresType } from '../types/indicadores';
import IndicadoresTabela from "../components/indicadores";
import axios from 'axios';

export default function Indicadores() {
  const [indicadores, setIndicadores] = useState<indicadoresType[]>([]);

  useEffect(() => {
    const fetchIndicadores = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/ticket_atualizacao/');
        console.log("Indicadores:", response.data);
        setIndicadores(response.data);
      } catch (error) {
        console.error('Erro ao buscar indicadores:', error);
      }
    };

    fetchIndicadores();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Indicadores</h1>
        {indicadores.length > 0 ? (
          <IndicadoresTabela indicadores={indicadores} />
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </main>
  );
}
