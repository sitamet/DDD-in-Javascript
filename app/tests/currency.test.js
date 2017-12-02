import currency from '../js/currency';

describe('testing Currency', () => {
    test('creation of currency with bad ISO Code should throw an error', () => {
        expect(() => { currency('eur'); }).toThrow(Error);
        expect(() => { currency('EURO'); }).toThrow(Error);
    });

    test('copied currency should represent same value', () => {
        let aCurrency = currency('USD');
        let copiedCurrency = aCurrency.clonate();

        expect(aCurrency.equals(copiedCurrency)).toBeTruthy();
    });
});