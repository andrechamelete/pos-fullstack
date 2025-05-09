//Aula 1
/* Crie uma função chamada calcularDesconto que receba o valor de um 
produto (número) e a porcentagem de desconto (número) e retorne uma 
string com o valor final formatado, ex: "Valor com desconto: R$ 90.00". */
function calcularDesconto(valor: number, percent: number): string {
    let conta = valor * (percent/100);
    let total = valor - conta;
    return `Valor com desconto: R$ ${total.toFixed(2)}`;
}

//-------------------------------------
//Aula 2
/* Crie uma interface chamada Carro com as propriedades: marca (string), 
modelo (string), ano (number) e ligado (boolean).
Em seguida, crie uma variável com um objeto Carro. */
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    ligado: boolean;
}

const uno: Carro = {
    marca: "ford",
    modelo: "2019",
    ano: 2020,
    ligado: false
};

/* Crie um type chamado Permissao com valores possíveis "admin", "user" e "guest".
Depois, crie um type chamado Usuario com nome (string) e permissao (Permissao).
Crie uma função que recebe um Usuario e imprime o nome e o nível de permissão. */ 
type Permissao = "admin" | "user" | "guest";

type Usuario = {
    nome: string;
    permissao: Permissao;
}

function UserPerm(usuario: Usuario): void {
    console.log(usuario.permissao);
}

var user: Usuario = {
    nome: "ander",
    permissao: "admin"
}

/* Crie uma interface chamada Pessoa com nome e idade.
Depois crie outra chamada Aluno que estende Pessoa com uma propriedade curso (string).
Crie um objeto Aluno com seus dados. */
interface Pessoa {
    nome: string;
    idade: number;
}

interface Aluno extends Pessoa {
    curso: string;
}

const eu: Aluno = {
    nome: "",
    idade: 40,
    curso: "pos"
}

//--------------------------------
//Aula 3

const multiply = (x: number, y: number): number => x * y;

/* Crie uma função boasVindas que recebe o nome de uma pessoa
 e retorna a string "Seja bem-vindo(a), <nome>!". */
function boasVindas(nome: string): string {
    return `Seja bem vindo(a), ${nome}`;
}

/* Crie um type chamado OperacaoMatematica que representa 
uma função que recebe dois number e retorna um number.
Em seguida, implemente três funções (somar, subtrair, multiplicar) usando esse tipo. */
type OperacaoMatematica = (x: number, y: number) => number;
const multipl: OperacaoMatematica = (x, y) => x * y;
const adiciona: OperacaoMatematica = (x, y) => x + y;
const dividir: OperacaoMatematica = (x, y) => x / y;

/* Crie uma arrow function calcularSalario que recebe um salário base 
(number) e um bônus (number, opcional, padrão 0), e retorna o total. */
const calcularSalario = (x: number, u: number = 0): number => x + u;

//--------------------------------
//Aula 4
