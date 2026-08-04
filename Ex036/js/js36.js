 let novoParagrafo = document.createElement('p')

 let texto = document.createTextNode('Eu sou o Kalen')

 novoParagrafo.appendChild(texto)
 console.log(novoParagrafo)

 var body = document.querySelector('body')

console.log(body)

body.appendChild(novoParagrafo)

var container =document.querySelector('.container')
console.log(container)

let span =document.createElement('span')
let texto2 = document.createTextNode('bom dia')

span.appendChild(texto2)
 

container.appendChild(span)


