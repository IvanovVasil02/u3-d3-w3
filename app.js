console.log("Ciao come va");
// function sum(num1: number, num2: number): number {
//     return num1 + num1;
//   }
//   console.log(sum(2, 2 ));
//   arrow function
var sumArrowFunc;
sumArrowFunc = function (first, second, third) {
    return third ? first + second + third : first + second;
};
console.log(sumArrowFunc(2, 3, 4));
// la le funzioni void sono quelle funzioni che ritornano nessun valore
var sayHi = function () {
    console.log("hey");
};
sayHi();
var franco = {
    name: "Franco",
    age: 34,
};
