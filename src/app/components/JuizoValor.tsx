import React from 'react';

interface JuizoValorProps {
  valor: number;
  tipo: 'pl' | 'pvp' | 'roe' | 'ebitda' | 'margem';
}

const JuizoValor: React.FC<JuizoValorProps> = ({ valor, tipo }) => {
  let juizo = '';

  switch (tipo) {
    case 'pl':
      juizo =
        valor > 10
          ? 'PL Acima de 10: Considerado caro'
          : valor < 5
          ? 'PL Abaixo de 5: Considerado barato'
          : 'PL Entre 5 e 10: Preço justo';
      break;
    case 'pvp':
      juizo = 'Análise P/VP não implementada';
      break;
    case 'roe':
      juizo =
        valor > 15
          ? 'ROE acima de 15%: Bom retorno sobre o patrimônio'
          : valor < 5
          ? 'ROE abaixo de 5%: Pode indicar problemas de rentabilidade'
          : 'ROE entre 5% e 15%: Rentabilidade razoável';
      break;
    case 'ebitda':
      juizo =
        valor > 1000
          ? 'EBITDA muito alto: Empresa com boa geração de caixa'
          : valor < 100
          ? 'EBITDA baixo: Pode indicar baixo lucro operacional'
          : 'EBITDA médio: Rentabilidade razoável';
      break;
    case 'margem':
      juizo =
        valor > 30
          ? 'Margem elevada: Empresa com boa eficiência operacional'
          : valor < 10
          ? 'Margem baixa: Pode indicar dificuldades operacionais'
          : 'Margem média: Rentabilidade razoável';
      break;
    default:
      juizo = 'Análise não disponível para este tipo de indicador';
  }

  return (
    <div className="mt-4 text-sm text-gray-600">
      <p>{juizo}</p>
    </div>
  );
};

export default JuizoValor;
