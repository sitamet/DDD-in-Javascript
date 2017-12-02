import currency from '../js/currency';
import money from '../js/money';

describe('testing Money', () => {
    test('creation of money without a currency as a param must throw an error', () => {
        expect(() => { money({ amount: 10, currency:'EUR' }); }).toThrow(Error);
        expect(() => { money({ amount: 10, currency: { isoCode: 'EUR' }}); }).toThrow(Error);
    });

    test('copied money should represent same value', () => {
        let aMoney = money({ amount: 100, currency: currency('USD')});
        let copiedMoney = aMoney.clonate();

        expect(aMoney.equals(copiedMoney)).toBeTruthy();
    });

    test('creation of money from currency should have same currency an 0 as amount', () => {
        let aCurrency = currency('USD');
        let aMoney = money({ currency: aCurrency });

        expect(aMoney.currency.equals(aCurrency)).toBeTruthy();
        expect(aMoney.amount).toBe(0);
    });

    test('original money should not be modified on addition', () => {
        let aMoney = money({ amount: 100, currency: currency('USD')});

        aMoney.add(money({ amount: 20, currency: currency('USD')}));

        expect(aMoney.amount).toBe(100);
    });

    test('monies should be added', () => {
        let aMoney = money({ amount: 100, currency: currency('USD')});
        let newMoney = aMoney.add(money({ amount: 20, currency: currency('USD')}));

        expect(newMoney.amount).toBe(120);
    });

    test('monies with different currencies should throw an error when added', () => {
        let aMoney = money({ amount: 100, currency: currency('USD')});

        expect(() => { aMoney.add(money({ amount: 20, currency: currency('EUR')})); }).toThrow(Error);
    });

    test('original money should not be modified on increase', () => {
        let aMoney = money({ amount: 100, currency: currency('USD')});

        aMoney.increaseAmountBy(20);

        expect(aMoney.amount).toBe(100);
    });

    test('monies should be increased', () => {
        let aMoney = money({ amount: 100, currency: currency('USD')});
        let newMoney = aMoney.increaseAmountBy(20);

        expect(newMoney.amount).toBe(120);
    });

    test('original money should not be modified on currency change', () => {
        let usd = currency('USD');
        let newCurrency = currency('EUR');
        let aMoney = money({ amount: 100, currency: usd });

        aMoney.changeCurrency(newCurrency);

        expect(aMoney.currency.equals(usd)).toBeTruthy();
    });

    test('monies should change currency', () => {
        let usd = currency('USD');
        let newCurrency = currency('EUR');
        let aMoney = money({ amount: 100, currency: usd });
        let newMoney = aMoney.changeCurrency(newCurrency);

        expect(newMoney.currency.equals(newCurrency)).toBeTruthy();
    });
});