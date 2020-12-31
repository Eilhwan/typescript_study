import { IPerson, makePerson, Person, makeRandomNumber } from './utils/makePerson';

const testMakePerson = (): void => {
    let jane: IPerson = makePerson('jane');
    let jack: IPerson = new Person('jack', makeRandomNumber());
    console.log(jane, jack);
}

testMakePerson();