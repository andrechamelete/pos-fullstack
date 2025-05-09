//declarar variável
let nome: string = "Andre"; //explicito
let nom = "Andre"; // implicito
let v: any = 3; // v pode ser de qualquer tipo
let w: unknown = 3;
let nomes: string[] = []; //cria uma string (vazia, no caso)
let nim: readonly string[] = []; //readonly: não é possível modificar

//objetos: no caso, year é opcional
let car: {model: string, year?: number} = {
    model: "ford",
    year: 2020
}

//Enum:
enum acesso {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

//interface:
interface Retangulo {
    altura: number,
    comprimento: number
}

let retangulo: Retangulo = {
    altura: 10,
    comprimento: 5
}

interface Colored extends Retangulo {
    color: string
}

//funçoes
function requisicao(code: string | number): void {
    // código
}

function multiplicar(a: number, b: number, c?: number, d: number = 1): number {
    return a * b * (c || d);
}

function adicionar(a: number, b: number, ...r: number[]) {
    return a + b + r.reduce((p, c) => p + c, 0);
}

//classes
class Persona {
    private name: string;
    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

class Quadrado implements Retangulo {
    altura: number;
    comprimento: number;
    public getArea(): number {
        return this.altura * this.comprimento;
    }
}

//criação de tipo:
type People = {
    nome: string;
    idade: number;
};

type Status = "aberto" | "fechado" | "pendente";

function atualizarStatus(status: Status): void {
  console.log("Novo status:", status);
}

atualizarStatus("pendente");

//generics:
function createPair<S, T>(x: S, y: T): [S, T] {
    return [x, y];
}