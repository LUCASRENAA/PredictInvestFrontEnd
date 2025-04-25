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
                console.log('Acoes:', response.data);
                setAcoes(response.data);
            } catch (error) {
                console.error('Erro ao buscar acoes:', error);
            }
        };

        fetchAcoes();
    }, []);

    return (
        <main className="flex min-h-screen flex-col justify-between py-12 px-20">
            <div className="min-w-[90%]">
                {acoes ?
                    <AcaoTabela acoes={acoes} />
                    : <p>Carregando...</p>}
            </div>
        </main>
    );
}
