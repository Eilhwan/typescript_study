
interface User {
    name: string,
    job: string,
    age: number,
    scores: {
        English: number,
        Korean: number,
        Math: number,
    }
}

let user1 = {
    name: "steve",
    job: "Super hero",
    age: 100,
    scores: {
        English: 100,
        Korean: 100,
        Math: 100,
    }
}
console.log(user1);

let user2: User = {
    name: "Hulk",
    job: "Scientist",
    age: 35,
    scores: {
        English: 100,
        Korean: 100,
        Math: 100,
    }
}
console.log(user2);