const eligibleClasses = ['comercial', 'residencial', 'industrial'];
const eligibleTariffs = ['convencional', 'branca'];

const getLastTwelveMonths = (data) => data.slice(-12);

const generateAnnualCO2Emission = (data) => {
  const historic = getLastTwelveMonths(data);
  const result = historic.reduce((acc, curr) => acc + curr);
  const annualEmission = (84 / 1000) * result;
  return annualEmission.toFixed(2);
};

const validateMinimumConsumption = (connection, historic) => {
  const monthlyConsumption = getLastTwelveMonths(historic);

  const averageConsumption = monthlyConsumption
    .reduce((acc, curr) => acc + curr) / monthlyConsumption.length;

  const minimumConsumption = {
    monofasico: 400,
    bifasico: 500,
    trifasico: 750,
  };

  return averageConsumption > minimumConsumption[connection];
};

const validateEligibility = (data) => {
  const {
    classeDeConsumo, modalidadeTarifaria, tipoDeConexao, historicoDeConsumo,
  } = data;

  const razoesInelegibilidade = [];

  if (!eligibleClasses.includes(classeDeConsumo)) {
    razoesInelegibilidade.push('Classe de consumo não aceita');
  }

  if (!eligibleTariffs.includes(modalidadeTarifaria)) {
    razoesInelegibilidade.push('Modalidade tarifária não aceita');
  }

  if (!validateMinimumConsumption(tipoDeConexao, historicoDeConsumo)) {
    razoesInelegibilidade.push('Consumo muito baixo para tipo de conexão');
  }

  const economiaAnualDeCO2 = generateAnnualCO2Emission(historicoDeConsumo);

  const elegivel = !razoesInelegibilidade.length;

  return {
    elegivel,
    razoesInelegibilidade,
    economiaAnualDeCO2,
  };
};

module.exports = validateEligibility;
