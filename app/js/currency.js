
let currency = {

    isCurrency: true,

    isoCode: null,

    clonate () {
        return createCurrency(this.isoCode);
    },

    equals (currency) {
        return currency.isoCode === this.isoCode;
    }
};



function createCurrency(anIsoCode) {

    errIfNotIsoCode(anIsoCode);

    let newCurrency = Object.create(currency);
    newCurrency.isoCode = anIsoCode;

    return Object.freeze(newCurrency);

}

function errIfNotIsoCode(anIsoCode) {
    if(!/^[A-Z]{3}$/.test(anIsoCode)) {
        throw Error('Bad ISO Code');
    }
}

export default createCurrency;
