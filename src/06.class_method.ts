
class A {
    value: number = 1
    // method: () => void = function(): void{
    //     console.log(`value: ${this.value}`)
    // }
}


class B {
    value: number = 1
    constructor(public name: string){

    }
    static method2(): void{
        console.log("hello world!")
    }

    method(): void {
        console.log(`value: ${this.value}`)
        
    }
}

class C {
    value: number = 1
    constructor(public name: string){

    }
    method2(value1: number){
        this.value *= value1
        return this
    }

    method(value1: number) {
        this.value *= value1
        return this

    }
}
let c: C = new C("jeon");
console.log(c.method(10).method2(10))
