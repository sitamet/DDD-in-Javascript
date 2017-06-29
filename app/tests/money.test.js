import Currency from '../js/currency';
import Money from '../js/money';

describe('testing Money', () => {
    test('creation of money without a currency as a param must throw an error', () => {
        expect(() => { new Money(10, 'EUR'); }).toThrow(Error);
        expect(() => { new Money(10, { isoCode: 'EUR' }); }).toThrow(Error);
    });

    test('copied money should represent same value', () => {
        let aMoney = new Money(100, new Currency('USD'));
        let copiedMoney = Money.fromMoney(aMoney);

        expect(aMoney.equals(copiedMoney)).toBeTruthy();
    });

    test('creation of money from currency should have same currency an 0 as amount', () => {
        let aCurrency = new Currency('USD');
        let aMoney = Money.ofCurrency(aCurrency);

        expect(aMoney.currency.equals(aCurrency)).toBeTruthy();
        expect(aMoney.amount).toBe(0);
    });

    test('original money should not be modified on addition', () => {
        let aMoney = new Money(100, new Currency('USD'));

        aMoney.add(new Money(20, new Currency('USD')));

        expect(aMoney.amount).toBe(100);
    });

    test('monies should be added', () => {
        let aMoney = new Money(100, new Currency('USD'));
        let newMoney = aMoney.add(new Money(20, new Currency('USD')));

        expect(newMoney.amount).toBe(120);
    });

    test('monies with different currencies should throw an error when added', () => {
        let aMoney = new Money(100, new Currency('USD'));

        expect(() => { aMoney.add(new Money(20, new Currency('EUR'))); }).toThrow(Error);
    });

    test('original money should not be modified on increase', () => {
        let aMoney = new Money(100, new Currency('USD'));

        aMoney.increaseAmountBy(20);

        expect(aMoney.amount).toBe(100);
    });

    test('monies should be increased', () => {
        let aMoney = new Money(100, new Currency('USD'));
        let newMoney = aMoney.increaseAmountBy(20);

        expect(newMoney.amount).toBe(120);
    });

    test('original money should not be modified on currency change', () => {
        let currency = new Currency('USD');
        let newCurrency = new Currency('EUR');
        let aMoney = new Money(100, currency);

        aMoney.changeCurrency(newCurrency);

        expect(aMoney.currency.equals(currency)).toBeTruthy();
    });

    test('monies should change currency', () => {
        let currency = new Currency('USD');
        let newCurrency = new Currency('EUR');
        let aMoney = new Money(100, currency);
        let newMoney = aMoney.changeCurrency(newCurrency);

        expect(newMoney.currency.equals(newCurrency)).toBeTruthy();
    });
});