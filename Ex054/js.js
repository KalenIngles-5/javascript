 //sinataxe 

function primeiraFuncao () {
     
 return new Promise((resolve) => {

     setTimeout (() => {
       
        console.log ("esperou isso aqui")
        resolve()

     },2000)

    

})
}

 

async function segundaFuncao () {
      console.log("Iniciou ")
      
       await primeiraFuncao()

      console.log("terminou")

}

segundaFuncao()

function getUser (id) {
    return fetch(`https://reres.in/api/users?id=${id}`)

    .then(data   => data.json())
    .catch((err) => console.log("err"))
}

async function  showUserName (id) 
{
    
    try {
      const user = await getUser(id)
      console.log(`O nome do usuario e:${user.data.first_name}`)
    } catch (err) {
             console.log(`erro:${err}`)                                       ,4
    }
    


}

showUserName(8)
    


 