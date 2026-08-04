const btn = document.querySelector('#btn')

console.log(btn)

btn.addEventListener ("click",function(){

    console.log('clicou');
    let h1 =document.querySelector ('h1');

    console.log(h1);

    let button = document.querySelector ('button')
    button.style.color = 'red'



})


const h1  = document.getElementsByTagName('h1')[0]

    h1.addEventListener ("click", function (){
        var subtitle = document.querySelector('.subtitle')
        subtitle.style.display = "none"

        h1.addEventListener  ("click", function(){


             var subtitle = document.querySelector('.subtitle')
            subtitle.style.display = "block"



        })  
    })
