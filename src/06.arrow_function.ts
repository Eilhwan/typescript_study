

// Ts의 화살표 함수
const makeBread = (num1: number, num2: number): number => {
    return num1 + num2;
}

const f = (callback: () => void): void => callback();

const init = (callback: () => void): void => {
    console.log('default init finished')
    callback()
    console.log("all init finished")
}

init(()=> console.log('hello world'))

const add1 = (a: number): (arg: number) => number => (b: number): number => a + b

type NumberToNumberFunc = (arg: number) => number

const add3 = (a: number): NumberToNumberFunc => {
    const _add: NumberToNumberFunc = (b: number) => {
        return a + b // closure
    }
    return _add
}

const fn = add3(1)

console.log(fn(2))