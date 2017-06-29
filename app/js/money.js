function setAmount(anAmount) {
    this.amount = anAmount;
}

function setCurrency(aCurrency) {
    this.currency = aCurrency;
}

export default class Money {
    constructor(anAmount, aCurrency) {
        setAmount.bind(this)(anAmount);
        setCurrency.bind(this)(aCurrency);
    }

    static fromMoney(aMoney) {
        return new this(aMoney.amount, aMoney.currency);
    }

    static ofCurrency(aCurrency) {
        return new this(0, aCurrency);
    }

    increaseAmountBy(anAmount) {
        return new this.constructor(this.amount + anAmount, this.currency);
    }

    changeCurrency(aCurrency) {
        return new this.constructor(this.amount, aCurrency);
    }

    equals(money) {
        return money.currency.equals(this.currency) &&
                money.amount === this.amount;
    }

    add(money) {
        if(!money.currency.equals(this.currency)) {
            throw Error('Trying to add money with different currency');
        }

        return new this.constructor(money.amount + this.amount, this.currency);
    }
}