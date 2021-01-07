
const multifly = (b: number, a: number = 9): number => {

    return a * b
}

console.log(multifly(7))

const makePerson = (name: string, age:number) => {
    const person = {name, age}
}
//객체를 반환할 때 소괄호로 감싸주어야 함
const makePerson1 = (name: string, age: number) => ({name, age})


type Person ={name: string, age: number}
const printPerson = ({name, age}: Person): void => {
    console.log(name, age)
}

const makeObj = (key, value) => ({[key]: value})

