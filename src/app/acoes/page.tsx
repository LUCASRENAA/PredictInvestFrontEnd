'use client'

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { acaoType } from '../types/acao';
import AcaoTabela from "../components/acaoTabela";
import axios from 'axios';

export default function Acoes() {
    const [acoes, setAcoes] = useState([] as acaoType[]);

    useEffect(() => {
        const fetchAcoes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/ticket/');
                //console.log('Acoes:', response.data);
                setAcoes(response.data);
            } catch (error) {
                console.error('Erro ao buscar acoes:', error);
            }
        };

        fetchAcoes();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="min-w-[75%]">
                {acoes ? <ul className="grid grid-cols divide-y divide-neutral-200 relative overflow-x-auto border rounded-md p-4 shadow-md">
                    <div className="flex flex-row justify-around text-lg font-bold">
                        <p className="px-8 pt-1 pb-3">Nome</p>
                        <p className="px-8 pt-1 pb-3">Setor</p>
                    </div>
                    {acoes.map(acao => (
                        <li key={acao.id} >
                            <AcaoTabela acao={acao} />
                        </li>
                    ))}
                </ul> : <p>Carregando...</p>}
            </div>
        </main>
    );
}
