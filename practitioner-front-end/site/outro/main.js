"use strict";
/* criar uma classe com construtor e funçoes */
 class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    nome;
    sobrenome;
    idade;
    name() {
        return this.nome + " " + this.sobrenome
    }
}
var andre = new Pessoa("andre", "chamelete", 39)
//console.log(andre.name())

/* criar objeto */
const pessoa = {
    nome: "andre",
    sobrenome: "chamelete",
    name: function() {
        return this.nome;
    },
    idade: 31
}

/* constructor */
function Person(first, last) {
    this.nome = first;
    this.sobrenome = last;
}
const ander = new Person("Andre", "Chamelete")
//console.log(JSON.stringify(ander))

/* incluir atributo em classe */
Person.prototype.gender = "masc";

/* criar RegEx */
const n = /()/;

/* os dois for abaixo fazem a mesma coisa */
var arr = [42, 23, 12, 43, 98];
for (let A in arr) { // funciona para objetos: arr[A] retorna o valor, A retorna a chave.
    //console.log(arr[A])
}

for (let b of arr) { // não funciona em objetos
    //console.log(b)
}

var arr1 = [1,2,3,4]
//console.log(arr1.push(10))
//console.log(arr1)

var arr = [
    {nome: "andre", idade: 23},
    {nome: "luana", idade: 18}
]

var arr = [1,2,3,4];
var arr1 = arr.reduce((tot, n) => tot + n, 0)
//console.log(arr1)

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const data = new Date("2021/03/19");
var x = new Date();
x.getTimezoneOffset()
// console.log(x)

var calcula = function(n) { return n*2};
var x = calcula(4)
//console.log(typeof calcula)

var person = {
    nome: "andre",
    sobrenome: "chamelete"
};
//console.log(person["nome"])

/* retorna as key/value pairs do objeto person; .keys() e .values() */
//console.log(Object.entries(person))

/* os métodos call() e apply() permitem utilizar um função, em outro objeto
   no exemplo, está se utilizando a funçao fullName, do objeto person, no objeto person1*/
//person.fullName.call(person1)
//person.fullName.call(person1, "casado", 39)
//person.fullName.apply(person1)
//person.fullName.apply(person1, ["casado, 39"])


/* assync function */
async function display() {
    let myProm = new Promise(function(resolve) {
        resolve("Hello")
    });
    console.log(await myProm);
}
//display();
