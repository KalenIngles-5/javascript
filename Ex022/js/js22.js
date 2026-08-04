function primeiroFunction() {
    console.log("Primeira função chamada");
}   

primeiroFunction();
function segundaFunction(idade) {
    console.log("Segunda função chamada com idade:", idade);
}

segundaFunction(18);

function soma(a, b) {
    let resultado = a + b;
    return resultado;
}

console.log("Resultado da soma:", soma(5, 10));