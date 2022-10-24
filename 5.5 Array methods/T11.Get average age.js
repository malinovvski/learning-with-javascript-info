function getAverageAge(users){
    return users.reduce((a, b) => a + b.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


//help from https://www.codingem.com/javascript-calculate-average/ ;)  