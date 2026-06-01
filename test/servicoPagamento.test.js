import ServicoPagamento from '../src/servicoPagamento.js';
import assert from 'node:assert';

describe('Servico de pagamento', () => {
    it('Validar pagamento com categoria cara', () => {
        const servico = new ServicoPagamento();

        servico.realizarPagamento(
            '0987-7656-3475',
            'Apple',
            150.00
        );

        const ultimoPagamento = servico.consultarPagamento();
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('Validar pagamento com categoria padrao', () => {
        const servico = new ServicoPagamento();

        servico.realizarPagamento(
            '1234-9876-4321',
            'Samsung',
            50.25
        );

        const ultimoPagamento = servico.consultarPagamento();
        assert.equal(ultimoPagamento.categoria, 'padrao');

    });

    it('Validar consulta do ultimo pagamento', () => {
        const servico = new ServicoPagamento();

        servico.realizarPagamento(
            '0102-0304-0506',
            'Nike',
            99.99
        );

        servico.realizarPagamento(
            '9876-5432-1000',
            'Adidas',
            56.87
        );

        const ultimoPagamento = servico.consultarPagamento();
        assert.equal(ultimoPagamento.codigoBarras, '9876-5432-1000');

    });
});