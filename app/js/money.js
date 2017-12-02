let money = {
    isMoney: true,

    amount: null,
    currency: null,

    clonate() {
        return createMoney({ amount: this.amount, currency: this.currency });
    },

    increaseAmountBy(anAmount) {
        return createMoney({ amount: this.amount + anAmount, currency: this.currency });
    },

    changeCurrency(aCurrency) {
        return createMoney({ amount: this.amount, currency: aCurrency });
    },

    equals(money) {
        return money.currency.equals(this.currency) &&
            money.amount === this.amount;
    },

    add(money) {
        if (!money.currency.equals(this.currency)) {
            throw Error('Trying to add money with different currency');
        }

        return createMoney({ amount: money.amount + this.amount, currency: this.currency });
    }
};


function createMoney({ amount = 0, currency }) {
    errIfNotCurrency(currency);

    return Object.freeze(Object.assign(Object.create(money), { amount, currency }));
}


function errIfNotCurrency(aCurrency) {
    if (!aCurrency || !aCurrency.isCurrency) {
        throw Error('Argument must be a Currency');
    }
}


export default createMoney;