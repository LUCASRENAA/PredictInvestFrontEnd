import React from 'react';
import { indicadoresType } from '../types/indicadores';
import JuizoValor from './JuizoValor';

interface IndicadorDetalheProps {
  indicador: indicadoresType;
}

const IndicadorDetalhe: React.FC<IndicadorDetalheProps> = ({ indicador }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">{indicador.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dados Gerais */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-600">📌 Dados Gerais</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-800">Valor Atual</span>
              <span className="text-gray-800">{indicador.valor_atual}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">PAYOUT</span>
              <span className="text-gray-800">{indicador.payout}%</span>
            </div>
          </div>
        </div>

        {/* Indicadores de Valuation */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-600">📈 Indicadores de Valuation</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-800">P/L</span>
              <span className="text-gray-800">{indicador.pl}</span>
            </div>
            <JuizoValor valor={indicador.pl} tipo="pl" />
            <div className="flex justify-between">
              <span className="text-gray-800">P/VP</span>
              <span className="text-gray-800">{indicador.pvp}</span>
            </div>
            <JuizoValor valor={indicador.pvp} tipo="pvp" />
            <div className="flex justify-between">
              <span className="text-gray-800">LPA</span>
              <span className="text-gray-800">{indicador.lpa}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">VPA</span>
              <span className="text-gray-800">{indicador.vpa}</span>
            </div>
          </div>
        </div>

        {/* Indicadores de Rentabilidade */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-green-600">🏦 Indicadores de Rentabilidade</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-800">ROE</span>
              <span className="text-gray-800">{indicador.roe}%</span>
            </div>
            <JuizoValor valor={indicador.roe} tipo="roe" />
            <div className="flex justify-between">
              <span className="text-gray-800">ROA</span>
              <span className="text-gray-800">{indicador.roa}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">EBITDA</span>
              <span className="text-gray-800">{indicador.EBITDA}</span>
            </div>
            <JuizoValor valor={indicador.EBITDA} tipo="ebitda" />
          </div>
        </div>

        {/* Indicadores de Margens */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-yellow-600">📊 Margens</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-800">Margem Bruta</span>
              <span className="text-gray-800">{indicador.margem_bruta}%</span>
            </div>
            <JuizoValor valor={indicador.margem_bruta} tipo="margem" />
            <div className="flex justify-between">
              <span className="text-gray-800">Margem Líquida</span>
              <span className="text-gray-800">{indicador.margem_liquida}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">Margem EBITDA</span>
              <span className="text-gray-800">{indicador.margem_ebitda}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">Margem Operacional</span>
              <span className="text-gray-800">{indicador.margem_operacional}%</span>
            </div>
          </div>
        </div>

        {/* Dívidas e Capital */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-purple-600">💰 Dívidas e Capital</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-800">Dívida Bruta</span>
              <span className="text-gray-800">{indicador.divida_bruta}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">Dívida Líquida</span>
              <span className="text-gray-800">{indicador.divida_liquida}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">Capital de Giro</span>
              <span className="text-gray-800">{indicador.capital_giro}</span>
            </div>
          </div>
        </div>

        {/* Outros Indicadores */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-teal-600">🔎 Outros Indicadores</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-800">Liquidez Corrente</span>
              <span className="text-gray-800">{indicador.liquidez_corrente}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">Liquidez Imediata</span>
              <span className="text-gray-800">{indicador.liquidez_imediata}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">Liquidez Seca</span>
              <span className="text-gray-800">{indicador.liquidez_seca}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">Endividamento Geral</span>
              <span className="text-gray-800">{indicador.endividamento_geral}%</span>
            </div>
          </div>
        </div>

        {/* Indicadores Fundamentais */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-indigo-600">📚 Indicadores Fundamentais</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-800">Receita por Ação</span>
              <span className="text-gray-800">{indicador.receita_acao}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">EBIT por Ação</span>
              <span className="text-gray-800">{indicador.ebit_acao}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">Margem EBIT</span>
              <span className="text-gray-800">{indicador.margem_ebit}%</span>
            </div>
          </div>
        </div>

        {/* Valuation Teórico */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-orange-600">📐 Valuation Teórico</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-800">Valor Intrínseco (Graham)</span>
              <span className="text-gray-800">{indicador.grahan}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">Valuation Bazin</span>
              <span className="text-gray-800">{indicador.bazin}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicadorDetalhe;
