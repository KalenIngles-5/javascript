//criacao de uma promessa
const myPromisse = new Promise((resolve, reject) => {
    const nome = "matheus"

    if (nome === "matheus") {
        resolve("o usuario Matheus foi encontardo")
    } else {
        reject("o usuario Matheus nao foi encontrado")
    }

})

myPromisse.then((data) => {
    console.log(data)
})


const myPromisse2 = new Promise((resolve, reject) => {
    const nome = "kalen"
    if (nome === "kalen") {
        resolve("o usuario foi encontrado")
    } else {
        reject("o usuario nao foi encontrado")
    }
})

myPromisse2
      .then((dados) => {
      return dados.toLowerCase()
       })

      .then((stringModificada) => {
        console.log(stringModificada)
      })
      
const myPromisse3 = new Promise((resolve, reject) => {
    const nome = "Daniel "
    if (nome === "kalen") {
        resolve("o usuario foi encontrado")
    } else {
        reject("o usuario nao foi encontrado")
    }
})

 myPromisse3.
 then((dados) => {
       console.log(dados)
     })

     .catch((error) => {
         console.log(`aconteceu um erro:${error}`)
     })

     const p1 = new Promise((resolve,reject) => {
       setTimeout(() => {
             resolve("p1 ok")
       },2000)
     })

     const p2 = new Promise((resolve,reject) => {
        resolve("p2 ok")

     })
     const p3 = new Promise((resolve,reject) => {
        resolve("p3 ok")

     })

     const resolveAll = Promise.all([p1,p2,p3])
        .then((data) =>  {
         console.log(data)
     })

       const p4 = new Promise((resolve,reject) => {
       setTimeout(() => {
             resolve("p4 ok")
       },8000)
     })

       const p5 = new Promise((resolve,reject) => {
       setTimeout(() => {
             resolve("p5 ok")
       },6000)
     })

       const p6 = new Promise((resolve,reject) => {
       setTimeout(() => {
             resolve("p6 ok")
       },4000)
     })

     const promise = Promise.race([p4,p5,p6]) 
     .then((data) => {
        console.log(data)


        
     })
           







 
      
