 var el = document.createElement('h3')

 el.classList='Principal'


 var texto = document.createTextNode('Isto em um teste')

 console.log(texto)

 el.appendChild(texto) 
 
 console.log(el)

 const tr = document.querySelector('h1')
 console.log(tr)
 
 var pai =  tr.parentNode

 pai.replaceChild(el , tr)
 