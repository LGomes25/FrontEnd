// for clássico
// for(let i=0; i<10; i++){
// }

var array = [0, 1, 2, 3];

//foreach

// for(let i=0; i<array.length; i++){
// const item = array[i];
// console.log(item);
// }

//sintaxe = <array nome>.forEach(<>); - classico
//sintaxe = <array nome>.forEach(<>);

array.forEach(function(item){
    console.log(item);
});

array.forEach((item)=>{
    console.log(item);
});


//map

const array2 = new Array
    array.map((item)=>{
    return item+1;
})
console.log(array2);




//reduce



//filter



//find