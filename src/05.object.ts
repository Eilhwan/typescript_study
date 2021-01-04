class Person1 {
    name?: string;
    age?: number;


}

interface IPerson {
    name: string,
    age: number
}
// 인터페이스를 impliment 받은 class
class Person2 implements IPerson {
    constructor(public name: string, public age: number){}
}

let jack1: Person1 = new Person1();
jack1.name = 'jack';
jack1.age = 32;
console.log(jack1);

//추상 클래스
abstract class Aperson {
    abstract name: string;
    constructor(public age: number) {};

}

class Person3 extends Aperson{
    
    constructor(public name: string, age: number){
        super(age)
    }
}

class A {
    static initValue: number = 1;
}
A.initValue++;
let initVal = A.initValue;
console.log(initVal);

