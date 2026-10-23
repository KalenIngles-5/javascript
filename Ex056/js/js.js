 const addressForm = document.querySelector(".address-form");

 const cepInput = document.querySelector("#cep");

 const addressInput = document.querySelector("#address");

 const numberInput = document.querySelector("#number");

 const compleInput = document.querySelector("#complement");

 const neigInput = document.querySelector("#neighborhood");

 const citypInput = document.querySelector("#city");

 const regionInput = document.querySelector("#region");

 const formInputs = document.querySelectorAll("[data-input]");

 const fadeElement = document.querySelector("#fade")
 
 
const closemessage = document.querySelector("#close-message")

const submitBtn = document.querySelector("#save-btn")
 

 // Validation patterns   

 cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers =/[0-9]/

     const key = String.fromCharCode(e.keyCode)
 
    //allow only numbers
     if(!onlyNumbers.test(key)) {
        e.preventDefault()
        return
     }
 })

 //Get address event 
 
 cepInput.addEventListener("keyup",(e) => {
  //check if we have correct length
  const inputValue = e.target.value
  if(inputValue.length  === 8) {
     getAddress(inputValue)
  }
    
  

 })

 // Get custmoer address from API

 const getAddress = async (cep) => {
   toggleLoader()
   cepInput.blur()

   const apiUrl = `https://viacep.com.br/ws/${cep}/json/`

   const response = await fetch(apiUrl)

   const data = await response.json()
   console.log(data)

  
 //show error from reset form 
 if(data.erro === "true") {
    if(!addressInput.hasAttribute("disabled")) {
       toggleAtribute()
    }
    addressForm.reset()
    toggleLoader()
   //show message
   toggleMessage("CEP,invalido tente novamente")

   
   return


 }
 
 if(addressInput.value === "") {
    toggleAtribute()
  }
  
  
   
   addressInput.value = data.logradouro
   citypInput.value = data.localidade
   neigInput.value = data.bairro
   regionInput.value = data.uf

   toggleLoader()
 
 }

 //add or remove disabled attribute
const toggleAtribute = () => {
   if(regionInput.hasAttribute("disabled")) {
     formInputs.forEach((input) => {
      input.removeAttribute("disabled")
     })
   } else {
      formInputs.forEach((input) => {

      input.setAttribute("disabled","disabled",)
     })
   }
}
 
 //show hide loader
 const toggleLoader = () => {
   const fadeElement = document.querySelector("#fade")
   const loaderElement = document.querySelector("#loader")
   loaderElement.classList.toggle("hide")
   fadeElement.classList.toggle("hide")
 }    

 //Show or hide message

 const toggleMessage = (msg) => {
  const messageElement = document.querySelector("#message")
  const messageElementText = document.querySelector("#message p")

  messageElementText.innerText = msg 
  fadeElement.classList.toggle("hide")
  messageElement.classList.toggle("hide")
 }

 closemessage.addEventListener("click",(e) => toggleMessage())

addressForm.addEventListener("submit",(e) => {
  e.preventDefault()
   toggleLoader()

  setTimeout(() => {
    
  toggleLoader()
  toggleMessage("CEP enviado com enviado com sucesso")
  addressForm.reset()
  toggleAtribute()


  },1500)
})







 
  

 






