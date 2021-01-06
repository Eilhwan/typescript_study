
function add(a: number, b: number): number{
    return a + b;
}

console.log(add(1, 2));

function printMe(name: string, age: number): void {

    console.log(name, age);
}

type stringNumberFunc = (arg1: string, agr2: number) => number;
let f: stringNumberFunc = function(a: string, b: number): number {console.log("hello"); return 1;};

f("ghh", f("11", 1));

// undefined 관련
interface IAgable{
    age?: number
}
function getAge(o: IAgable){
    return o != undefined && o.age ? o.age : 0;
}

console.log(getAge({age: undefined}));
console.log(getAge({age: 0}));
console.log(getAge({age: 32}));

// 선택적 매개변수
 function fn(arg1: string, arg?: number): void {};
 