 var el = document.createElement('div')
 
 el.classList = 'div-criada'

 console.log(el)

 var container =document.querySelector('.container')

 container.appendChild(el)

 var p = document.createElement('p')

 var texto = document.createTextNode('isto e uma div')

 p.appendChild(texto)

  console.log (p)

  var divcriada = document.querySelector('.div-criada')

  divcriada.appendChild(p)

  let  el2 =document.createElement('div')
  el2.classList = 'div-before'

  var el3= document.querySelector('.div-criada')

  console.log(el3)

  container.insertBefore(el2,el3)

 var body = document.querySelector('body')

 body.insertBefore(el2,container)





  






