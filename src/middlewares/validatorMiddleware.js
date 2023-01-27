const { cpf, cnpj } = require('cpf-cnpj-validator');
const { schema } = require('../schemas/elegibilitySchema');
const schemaError = require('../helpers/schemaError');

const validatorMiddleware = (req, _res, next) => {
  const { error } = schema.validate(req.body);
  const { numeroDoDocumento } = req.body;
  const isValidCpf = cpf.isValid(numeroDoDocumento);
  const isValidCnpj = cnpj.isValid(numeroDoDocumento);
  if (error) throw schemaError(error.message);
  if (!isValidCpf && !isValidCnpj) throw schemaError('Document invalid');

  next();
};

module.exports = validatorMiddleware;
