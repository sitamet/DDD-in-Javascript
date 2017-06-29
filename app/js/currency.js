function setIsoCode(anIsoCode) {
    if(!/^[A-Z]{3}$/.test(anIsoCode)) {
        throw Error('Bad ISO Code');
    }

    this.isoCode = anIsoCode;
}

export default class Currency {
    constructor(anIsoCode) {
        setIsoCode.bind(this)(anIsoCode);
    }

    static fromCurrency(aCurrency) {
        return new this(aCurrency.isoCode);
    }

    equals(currency) {
        return currency.isoCode === this.isoCode;
    }
}