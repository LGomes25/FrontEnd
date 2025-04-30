//funcao Declarativa

function soma(a,b){
    return a + b;
}

console.log(soma(10,20));

const numeros = [1,5,10,20];

function media(nums){
    let soma =0;
    for (let i = 0; i < nums.length; i++) {
        soma += nums[i];
    }
    return Math.round(soma/nums.length);
}
console.log("A média é: ", media(numeros));
