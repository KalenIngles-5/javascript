const objs = [{

    "nome": "Mathues",
    "idade": 30,
    "esta_trabalhando": true,
    "detalhe_profissao":{ 
        "profissao":"programador",
        "empresa":"empresa X"
    },
    "hobbies": ["programador,Desenhista,Fotografo"]



},
{

    "nome": "Joao",
    "idade": 35,
    "esta_trabalhando": null,
    "detalhe_profissao":{ 
        "profissao":"cozinheiro",
        "empresa":"empresa X"
    },
    "hobbies": ["programador,Desenhista,Fotografo"]



}
]

console.log(objs[1])


const jsonData =JSON.stringify(objs)

console.log(jsonData)

const objData = JSON.parse(jsonData)


console.log(objData)