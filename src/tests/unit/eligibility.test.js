const { expect } = require('chai');

const elegibilityService = require('../../services/eligibilityService');

const mocks = require('../mocks/elegibilityMocks');

describe('Testa Eligibility Service', () => {
  describe('Testa a função elegibilityService', () => {
    it('Testa o retorno com os dados são elegiveis', () => {
      const { input, output } = mocks.elegible;
      const result = elegibilityService(input);
      expect(result).to.be.an('object');
      expect(result).to.deep.equal(output);
    });

    it('Testa o retorno com os dados não são elegiveis por classe de consumo', () => {
      const { input, output } = mocks.notElegibleByConsumptionClass;
      const result = elegibilityService(input);
      expect(result).to.be.an('object');
      expect(result).to.deep.equal(output);
    });

    it('Testa o retorno com os dados não elegiveis por modalidade tarifaria', () => {
      const { input, output } = mocks.notElegibleByTariffModality;
      const result = elegibilityService(input);
      expect(result).to.be.an('object');
      expect(result).to.deep.equal(output);
    });

    it('Testa o retorno com os dados não elegiveis por consumo minimo', () => {
      const { input, output } = mocks.notElegibleByMinConsumption;
      const result = elegibilityService(input);
      expect(result).to.be.an('object');
      expect(result).to.deep.equal(output);
    });

    it('Testa o retorno com um campo inválido', () => {
      const { input } = mocks.invalidInput;
      expect(() => elegibilityService(input)).to.throw();
    });
  });
});
