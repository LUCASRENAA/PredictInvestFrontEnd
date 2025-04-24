export type indicadoresType = {
  id: number;
  ticket: string;
  name: string;
  data_atualizacao: string; // DateTimeField
  valor_atual: number; // DecimalField
  payout: number; // DecimalField
  lpa: number; // DecimalField
  vpa: number; // DecimalField
  pl: number; // DecimalField
  pvp: number; // DecimalField
  psr: number; // DecimalField
  roe: number; // DecimalField
  roa: number; // DecimalField
  EBITDA: number; // DecimalField
  margem_bruta: number; // DecimalField
  margem_liquida: number; // DecimalField
  margem_ebitda: number; // DecimalField
  margem_operacional: number; // DecimalField
  pcf: number; // DecimalField
  liquidez_corrente: number; // DecimalField
  liquidez_imediata: number; // DecimalField
  liquidez_seca: number; // DecimalField
  giro_ativo: number; // DecimalField
  endividamento_geral: number; // DecimalField
  ativo_acao: number; // DecimalField
  divida_bruta: number; // DecimalField
  divida_liquida: number; // DecimalField
  capital_giro: number; // DecimalField
  receita_liquida: number; // DecimalField
  ebit_acao: number; // DecimalField
  margem_ebit: number; // DecimalField
  grahan: number; // DecimalField
  bazin: number; // DecimalField
  receita_acao: number;
};