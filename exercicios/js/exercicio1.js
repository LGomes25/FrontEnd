//(1) - Crie um objeto que represente um livro, com as propriedades: 
//autor, título, ano, exiba no console só o nome do autor e o título.

/*const livro = {
    autor:"Leonardo", 
    titulo:"Nada contra JS",
    ano:2025
}
console.log("Autor: ",livro.autor,"\nTítulo: ",livro.titulo);*/

//(2) - Criar um objeto que represente um carro, contendo propriedades 
//como marca, modelo, ano, cor, entre outras propriedades, 
//exiba as propriedades do objeto no console, e adicione uma função
//dentro do objeto para pegar a marca desse objeto, e exibir no console.

/*const carro = {
    marca:"VW",
    modelo: "Fusca",
    ano: 1978,
    cor: "Azul",

    exibirMarca: function(){        //função dentro do objeto!!!
        console.log(`A marca do carro é: ${this.marca}`);
    }
}

console.log(carro);
carro.exibirMarca(); //chamada de função dentro do objeto*/
 
//(3) - Crie um objeto que represente informações de uma pessoa,
//faça uma função para verificar se existe alguma informação 
//dentro do objeto

/*const pessoa = {
    nome: "leo",
    idade: 44,
    altura: 1.8,
    cidade: "macaé"
}

function contar(xicaras){
   return Object.keys(xicaras).length === 0?
                            "Objeto Vazio":
                            "Objeto Existente";
};

console.log(contar(pessoa));
console.log(contar({}));*/

//(4) - Criar um array de frutas. Adicione duas frutas ao array e, 
//em seguida, remova uma fruta. Exiba o array após cada operação.

/*const frutas = ["Pêra","Maracujá","Melão"];
console.log(frutas);
frutas [3]= "Morango";
frutas [4]= "Abacate"; //Adiciona informando um novo numero de posição
frutas.push("Limão"); //Adiciona independente do numero da ultima posição
console.log(frutas);
console.log(frutas[1]);//verificar posição 1
frutas.splice(1,1); //remove um item do array e reorganiza, evitando "buracos"
console.log(frutas);
console.log(frutas[1]);//verificar posição 1 */

//(5) - Crie dois arrays, cada um com suas características, 
//e una esses dois arrays

/*const carro = ["Fusca", "Chevette", "Brasilia"];
const pessoa = ["leo", "Michelle", "Bia"];

const unir = carro.concat(pessoa);//concatenar dois arrays

console.log(carro);
console.log(pessoa);
console.log(unir);*/

// (6) - Crie um array que contém números, incluindo duplicatas. 
// Utilize um método Set do Javascript para remover as duplicatas 
// e exiba o array resultante.

/*const num = [2, 6, 8, 12, 5, 6, 59];

console.log(num);

const unico = new Set(num); //set é uma lista que não permite duplicados

console.log(unico);*/

//(7) - Criar um array de números. Utilize o método Filter para 
// criar um array que contenha apenas os números pares. Exiba o novo array.

/*const num = [2, 6, 8, 12, 5, 59];

const pares = num.filter(n => n % 2 === 0);

console.log(num);
console.log(pares);*/

//(8) - Crie um array de números desordenados e utilize o método 
// sort para ordená-los em ordem crescente. Exiba o array antes 
// e depois da ordenação.

/*const num = [2, 26, 6, 8, 12, 5, 59];

console.log(num);

num.sort(function(a,b){return a-b});//função para organizar um array crescente

console.log(num);*/

//(9) - Crie um array contendo nomes de frutas, use o método 
// includes para verificar se determinada fruta está presente 
// no array e exiba a resposta no console.

/*const frutas = ["Pêra","Maracujá","Melão"];

frutas.includes("Pêra")?console.log("Contém Pêra")
                        :console.log("Falta comprar");*/

//(10) - Crie um array de preços de produtos, 
// use o método map para criar um array onde cada preço 
// é aumentado em 10%. Exiba o novo array no console.

/*const preco = [101, 200, 500, 900];

console.log(preco);

const newpreco = preco.map(novo => novo * 1.15);

console.log(newpreco);*/





 