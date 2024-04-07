'use client'

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { acaoType } from '../types/acao';
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
            <div>
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold">Bem-vindo ao Predict Invest</h1>
                    <p className="text-lg mt-4">Acompanhe seus investimentos</p>
                </div>
                {acoes ? <ul>
                    {acoes.map(acao => (
                        <li key={acao.id} className="flex flex-row">
                            <div className="flex flex-col items-center justify-center">
                                <strong>Nome</strong>
                                {acao.name}
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <strong>Setor</strong>
                                {acao.setor}
                            </div>
                        </li>
                    ))}
                </ul> : <p>Carregando...</p>}
            </div>
        </main>
    );
}
