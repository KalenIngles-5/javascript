class Calculadora {
 
   constructor (previousOperation,currentOperation){
     this.previousOperation = previousOperation 
     this.currentOperation = currentOperation
     this.currentOperationText = ""
  
   }

   addDigit(digit) {
        if( digit === "." && this.currentOperation.innerText.includes(".") )   
        {
             return
        }
       this.currentOperationText = digit
       this.update()
   }


   processOperation(operation) {
    if (this.currentOperation.innerText === "" ) {
        if(this.previousOperation.innerText !== "" ) {
            this.changeOperation(operation)
        }
       return
    }
     let operationValue 
     const previous = +this.previousOperation.innerText.split(" ")[0]
     const current = +this.currentOperation.innerText 
      switch(operation) {
        case "+" :
          operationValue = previous + current
          this.update(operationValue,operation,previous,current)
          break
        case "-" :
          operationValue = previous - current
          this.update(operationValue,operation,previous,current)
          break
        case "*" :
          operationValue = previous * current
          this.update(operationValue,operation,previous,current)
          break
        case "/" :
          operationValue = previous / current
          this.update(operationValue,operation,previous,current)
          break
        case "DEL" :
           this.delOperation()
          break
        case "C" :
               this.cOperation()
          break
        case "CE" :
            this.celOperation()
          break
        case "=" :
            this.equalOperation()
          

      }
                   
    }
   

 
   update(
    operationValue = null,
    operation = null,
    previous = null,
    current = null
   ) {
      if (operationValue === null) {
           this.currentOperation.innerText += this.currentOperationText
   } else {
       if (previous === 0 ) {
             operationValue = current
       }

       this.previousOperation.innerText = `${operationValue} ${operation} `
       this.currentOperation.innerText =""
    

           }
    }

    changeOperation(operation) {

        const mathoOperation  = ["*","/","+","-"]
        if (!mathoOperation.includes(operation)) {
            return
        }
        
        this.previousOperation.innerText = this.previousOperation.innerText.slice(0,-1) + operation

        
    }

    delOperation() {
        this.currentOperation.innerText = this.currentOperation.innerText.slice(0,-1)
     }

     cOperation () {
        this.currentOperation.innerText=""
        this.previousOperation.innerText =""
        
     }

     celOperation() {
       this.currentOperation.innerText =""
        
     }
     equalOperation() {

        const operation = this.previousOperation.innerText.split(" ")[1]
        this.processOperation(operation)
        this.previousOperation.innerText.slice(0,-1)
     }
    



}



const currentOperation = document.querySelector("#current-operation")
const previousOperation = document.querySelector("#previous-operation")
const buttons = document.querySelectorAll("#buttons button")
const calc = new Calculadora (previousOperation,currentOperation)
 
 

 buttons.forEach ((btn) => {

     btn.addEventListener("click", function(e) {
        const value = e.target.innerText
        

        if(+value >= 0 || value=== "." ) {
             calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }

     })
 })



 
  



