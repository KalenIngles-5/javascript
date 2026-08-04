 let pessoa = {
    nome:"Kalen",
    idade:18,
    falar:function() {
        console.log('Ola,tudo bem?')
    },
    soma: function (a,b) {
        return a + b;
    }
 }

console.log(pessoa.nome);
console.log(pessoa.idade);


pessoa.falar()


var soma=pessoa.soma( 50,50)
console.log(soma)


 
