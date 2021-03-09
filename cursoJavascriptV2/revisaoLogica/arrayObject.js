const nomes = ["", "", ""];
const pessoa = { nome: "Daniel", idade: 10, email: "" };
const pessoa1 = {};

const pessoas = [{
    nome: "Daniel",
    idade: 40,
}, {
    nome: "Maria",
    idade: 28,
}, {
    nome: "Helena",
    idade: 45,
}, {
    nome: "João",
    idade: 18,
}];

for (let i = 0; i < pessoas.length; i += 1) {
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} anos`);
}