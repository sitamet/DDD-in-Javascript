/*
  NOTE:

  Object.create and Object.assign does not chain

  then Object.assign(Object.create(a), b) makes a shallow copy!

  read more: https://medium.com/@tkssharma/objects-in-javascript-object-assign-deep-copy-64106c9aefab

  Solution:
  we do not use an Object.create(ofOurGlobalObject) instead we place the valueObject inside our factory function

  Todo: we need a simple Object.freeze that freezes our nested objects.
 */


function createNestedValueObject(nestedValues) {

    let nested = {

        theNestedValues: {
            a: 1,
            b: 2
        },
        get,
        newA
    };

    Object.assign(nested.theNestedValues, nestedValues);

    return Object.freeze(nested);
}

export default createNestedValueObject;


// PUBLIC:

function get() {
    return this;
}

function newA(value) {
    return createNestedValueObject({ a: value })
}



// PRIVATE:
