const Joi = require('joi');

const schema = Joi.object({
  numeroDoDocumento: Joi.alternatives().try(
    Joi.string().pattern(/^(\d{11})$/),
    Joi.string().pattern(/^(\d{14})$/),
  ).required(),
  tipoDeConexao: Joi.string().valid('monofasico', 'bifasico', 'trifasico').required(),
  classeDeConsumo: Joi.string().valid('residencial', 'industrial', 'comercial', 'rural', 'poderPublico').required(),
  modalidadeTarifaria: Joi.string().valid('azul', 'branca', 'verde', 'convencional').required(),
  historicoDeConsumo: Joi.array().items(Joi.number().integer().min(0).max(9999)).min(3).max(12)
    .required(),
});

module.exports = { schema };
