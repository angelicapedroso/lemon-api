/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const mocks = require('../mocks/elegibilityMocks');

const app = require('../../server');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota de elegibilidade', async () => {
  describe('Testa a rota POST /eligibility', () => {
    it('testa retorno com dados elegiveis', async () => {
      const { input, output } = mocks.elegible;
      const res = await chai.request(app)
        .post('/eligibility')
        .send(input);
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal(output);
    });

    it('testa retorno com dados não elegiveis por classe de consumo', async () => {
      const { input, output } = mocks.notElegibleByConsumptionClass;
      const res = await chai.request(app)
        .post('/eligibility')
        .send(input);
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal(output);
    });

    it('testa retorno com dados não elegiveis por modalidade tarifaria', async () => {
      const { input, output } = mocks.notElegibleByTariffModality;
      const res = await chai.request(app)
        .post('/eligibility')
        .send(input);
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal(output);
    });

    it('testa retorno com dados não elegiveis por consumo minimo', async () => {
      const { input, output } = mocks.notElegibleByMinConsumption;
      const res = await chai.request(app)
        .post('/eligibility')
        .send(input);
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal(output);
    });

    it('testa retorno com um campo inválido', async () => {
      const { input } = mocks.invalidInput;
      const res = await chai.request(app)
        .post('/eligibility')
        .send(input);
      expect(res).to.have.status(400);
    });

    it('testa retorno de um erro diferente do schema', async () => {
      const error = new Error('Erro geral');
      const res = await chai.request(app)
        .post('/eligibility')
        .send(error);
      expect(res).to.have.status(500);
    });
  });
});
