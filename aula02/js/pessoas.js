//Criar um array de nomes e imprimir a primeira letra de cada nome
const nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];

nomes.forEach(nome => {
    console.log(nome.charAt(0)); // Pega a primeira letra do nome
});

//ou

const pessoas = [
    { nome: "Marcos", idade: 20, cidade: "RJ" },
    { nome: "Amanda", idade: 25, cidade: "BH" },
    { nome: "Carlos", idade: 30, cidade: "BH" },
    { nome: "Fernanda", idade: 22, cidade: "Curitiba" },
    { nome: "Marcelo", idade: 28, cidade: "Porto Alegre" }
];

console.log(pessoas);//lista todo o array

pessoas.filter((p) => p.cidade === "RJ")
    .forEach((p) => console.log(`nome: ${p.nome} idade: ${p.idade}`));

pessoas.filter((p) => p.cidade === "BH" && p.idade >= 28)
    .forEach((p) => console.log(`nome: ${p.nome} idade: ${p.idade}`));

pessoas.filter((p) => p.nome.toLowerCase().includes("m"))
    .forEach((p) => console.log(`nome: ${p.nome}`));

