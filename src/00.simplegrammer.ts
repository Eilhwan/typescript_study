interface person {
    name: string,
    age?: number
};


// Class
abstract class Animal {
    constructor(public name?: string, public age?: number){}
    abstract say(): string
}

class Cat extends Animal {
    say() {return "Meow"}
}

class Dog extends Animal {
    say() {return "Bark"}   
}

let animals: Animal[] = [new Cat('kitten', 2), new Dog('puppy', 3)]

let sounds = animals.map(a => a.say());

// 생성기(generator)
function* gen(){
    yield* [1, 2]
}
for(let value of gen()){
    console.log(value)
}

async function get() {
    let values = [];
    values.push(await Promise.resolve(1))
    values.push(await Promise.resolve(2))
    values.push(await Promise.resolve(3))
    return values
}

get().then(values => console.log(values));

// Generic

class Container<T> {
    constructor(public value: T){}
}
let numberContainer: Container<number> = new Container<number>(1);
let stringContainer: Container<string> = new Container<string>("Hello world");

type NumberOrString = number | string;
type AnimalAndPerson = Animal & Person;