//-------------------------------------
function calcularDesconto(valor, percent) {
    var conta = valor * (percent / 100);
    var total = valor - conta;
    return "Valor com desconto: R$ ".concat(total.toFixed(2));
}
var uno = {
    marca: "ford",
    modelo: "2019",
    ano: 2020,
    ligado: false
};
function UserPerm(usuario) {
    console.log(usuario.permissao);
}
var user = {
    nome: "ander",
    permissao: "admin"
};
var eu = {
    nome: "",
    idade: 40,
    curso: "pos"
};
//--------------------------------
var multiply = function (x, y) { return x * y; };
function boasVindas(n) {
    return "Seja bem vindo(a), ".concat(n);
}
var multipl = function (x, y) { return x * y; };
var adiciona = function (x, y) { return x + y; };
var dividir = function (x, y) { return x / y; };
var calcularSalario = function (x, u) {
    if (u === void 0) { u = 0; }
    return x + u;
};
console.log(calcularSalario(1000, 200));
console.log(calcularSalario(1000));
