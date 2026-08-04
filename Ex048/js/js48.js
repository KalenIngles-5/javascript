 let h1 = document.querySelector('h1')

  console.log(h1);


  h1.addEventListener ('mouseover',function(){
    h1.style.color = 'blue'




  })

    h1.addEventListener ('mouseout',function(){
    h1.style.color = 'black'




  })

    h1.addEventListener ('mouseover',function(){
    h1.style.color = 'blue'
     let le = document.querySelector ('#le')
      le.classList.remove('le')
      

        }) 

      h1.addEventListener ('mouseout',function(){
     h1.style.color = 'blue'
     let le = document.querySelector ('#le')
       le.classList.add('le')


  })


   
 