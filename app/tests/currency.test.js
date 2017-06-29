import Currency from '../js/currency';

describe('testing Currency', () => {
    test('creation of currency with bad ISO Code should throw an error', () => {
        expect(() => { new Currency('eur'); }).toThrow(Error);
        expect(() => { new Currency('EURO'); }).toThrow(Error);
    });

    test('copied currency should represent same value', () => {
        let aCurrency = new Currency('USD');
        let copiedCurrency = Currency.fromCurrency(aCurrency);

        expect(aCurrency.equals(copiedCurrency)).toBeTruthy();
    });
});