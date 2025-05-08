const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = false;
    if (sucesso) {
        resolve("Deu certo");
    } else {
        reject("Deu errado");
    }
});

minhaPromise.then((resultado) => {
    console.log(resultado);

}).catch((resultado) => {
    console.log("Erro " + resultado);
});