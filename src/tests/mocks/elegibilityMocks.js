const elegible = {
  input: {
    numeroDoDocumento: '30946651000135',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    modalidadeTarifaria: 'convencional',
    historicoDeConsumo: [
      3878,
      9760,
      5976,
      2797,
      2481,
      5731,
      7538,
      4392,
      7859,
      4160,
      6941,
      4597,
    ],
  },
  output: {
    elegivel: true,
    economiaAnualDeCO2: '5553.24',
  },
};

const notElegibleByConsumptionClass = {
  input: {
    numeroDoDocumento: '30946651000135',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'rural',
    modalidadeTarifaria: 'convencional',
    historicoDeConsumo: [
      3878,
      9760,
      5976,
      2797,
      2481,
      5731,
      7538,
      4392,
      7859,
      4160,
      6941,
      4597,
    ],
  },
  output: {
    elegivel: false,
    razoesInelegibilidade: [
      'Classe de consumo não aceita',
    ],
  },
};

const notElegibleByTariffModality = {
  input: {
    numeroDoDocumento: '30946651000135',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    modalidadeTarifaria: 'verde',
    historicoDeConsumo: [
      3878,
      9760,
      5976,
      2797,
      2481,
      5731,
      7538,
      4392,
      7859,
      4160,
      6941,
      4597,
    ],
  },
  output: {
    elegivel: false,
    razoesInelegibilidade: [
      'Modalidade tarifária não aceita',
    ],
  },
};

const notElegibleByMinConsumption = {
  input: {
    numeroDoDocumento: '30946651000135',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    modalidadeTarifaria: 'convencional',
    historicoDeConsumo: [
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
    ],
  },
  output: {
    elegivel: false,
    razoesInelegibilidade: [
      'Consumo muito baixo para tipo de conexão',
    ],
  },
};

const invalidInput = {
  input: {
    numeroDoDocumento: '140417706',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    modalidadeTarifaria: 'convencional',
    historicoDeConsumo: [
      3878,
      9760,
      5976,
      2797,
      2481,
      5731,
      7538,
      4392,
      7859,
      4160,
      6941,
      4597,
    ],
  },
  output: {
    message: 'mensagem de erro',
  },
};

module.exports = {
  elegible,
  notElegibleByConsumptionClass,
  notElegibleByTariffModality,
  notElegibleByMinConsumption,
  invalidInput,
};
