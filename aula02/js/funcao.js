

function calcular(a, b) {
    return a * b;
}

console.log("O resultado é: ", calcular(10, 2), " fim de calculo");

//Template Literal
console.log(`O resultado é: ${calcular(10, 2)} fim de cálculo ${2 + 5}`);

const numeros = [2, 5, 8, 10, 0];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

const numerosMap = numeros.map((n) => n * 2);
console.log(numerosMap);

const numerosForEach = numeros.forEach((n) => console.log(n * 5));

const numerosFiltro = numeros.filter((num) => num % 2 === 0);
console.log(numerosFiltro);

