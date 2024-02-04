let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

function namify(users) {//map выполнит возврат массива результатов у users что представляет собой значение у name
 return users = users.map(item => item.name);
}

console.log(namify(users));
let names = namify(users); // ['Вася', 'Петя', 'Маша']
console.log(names)
