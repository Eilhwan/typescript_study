

interface Person {
    name: string;
}

let obj = {name: "jack"};
let name1 = (<Person>obj).name;
let name2 = (obj as Person).name;

console.log(name1, name2);
//why?
console.log(obj.name);