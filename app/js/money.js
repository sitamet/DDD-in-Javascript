import Currency from './currency';

let amount;
let currency;

function setAmount(anAmount) {
    amount = anAmount;
}

function setCurrency(aCurrency) {
    if(!(aCurrency instanceof Currency)) {
        throw Error('Argument must be an instance of Currency');
    }

    currency = aCurrency;
}

export default class Money {
    constructor(anAmount, aCurrency) {
        setAmount(anAmount);
        setCurrency(aCurrency);

        this.amount = this.amount();
        this.currency = this.currency();
    }

    amount() {
        return amount;
    }

    currency() {
        return currency;
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