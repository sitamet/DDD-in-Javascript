let isoCode;

function setIsoCode(anIsoCode) {
    if(!/^[A-Z]{3}$/.test(anIsoCode)) {
        throw Error('Bad ISO Code');
    }

    isoCode = anIsoCode;
}

export default class Currency {
    constructor(anIsoCode) {
        setIsoCode(anIsoCode);

        this.isoCode = this.isoCode();
    }

    isoCode() {
        return isoCode;
    }

    static fromCurrency(aCurrency) {
        return new this(aCurrency.isoCode);
    }

    equals(currency) {
        return currency.isoCode === this.isoCode;
    }
}