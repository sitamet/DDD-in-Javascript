import nestedValueObject from '../js/nested-value-object';


describe('testing Money', () => {

    test('original money should not be modified on addition', () => {

        let aNestedValueObject = nestedValueObject({ a: 1, b: 2 });
        let bNestedValueObject = nestedValueObject({ a: 3, b: 4 });

        expect(aNestedValueObject.get().theNestedValues.a).toBe(1);
        expect(bNestedValueObject.get().theNestedValues.a).toBe(3);


    });


    test('newA', () => {

        let aNestedValueObject = nestedValueObject({ a: 1, b: 2 });

        let newNestedValueObject = aNestedValueObject.newA(2);

        expect(aNestedValueObject.get().theNestedValues.a).toBe(1);
        expect(newNestedValueObject.get().theNestedValues.a).toBe(2);

    });

});