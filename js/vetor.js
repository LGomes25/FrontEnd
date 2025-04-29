var frutas = new Array();
let cores = [];
let cursos = ["java", "PHP"];
let pessoas = [{nome: "Fulano"},{nome:"Leo"}];

cursos.push("React");//insere no final
cursos.push(1000);
cursos.unshift("Delph");//insere no inicio

cursos.sort();//embaralha a lista
cursos.reverse();//inverte a lista

cursos.shift();//remove o primeiro elemento
cursos.pop();//remove o ultimo elemento

cursos.splice(0,0);//apaga com o numero do indice, a partir do primeiro até o penultimo listado

for (let i = 0;i< cursos.length; i++){
    console.log(cursos[i]);
}


const livro = {
    autor: "Lorena",
    paginas: 50,
    linguagem: "Portugues"
};

console.log(livro.paginas);//leitura na tela de parte do objeto
