console.log("Ciao come va");

// function sum(num1: number, num2: number): number {
//     return num1 + num1;
//   }

//   console.log(sum(2, 2 ));


//   arrow function

  let sumArrowFunc: (a: number, b: number, third?: number | undefined) => number;
  
  sumArrowFunc = (first: number, second: number, third?: number ) => {
    return third? first + second+third : first + second;
   
  };
  
console.log(sumArrowFunc(2, 3, 4))

// la le funzioni void sono quelle funzioni che ritornano nessun valore
const sayHi = ()=>{

    console.log("hey")
}
sayHi();

// interface definisce un oggetto e di ciò di cui ha bisogno per essere usato prima di assegnarli dei valori
interface PersonInterface {
    name: string;
    age: number;
}

// oggeto normalw
// let franco = {
//     name: "Franco",
//     age: 34,
// }

// per far così che questo oggetto aderisca ai type di personINterface, ci basta dare come type a franco la person Interface
let franco:  PersonInterface = {
    name: "Franco",
    age: 34,
}    