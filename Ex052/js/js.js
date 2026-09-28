
class Calculator {
      constructor( previousOperationText,currentOperationText) {

       this.previousOperationText = previousOperationText
       this.currentOperationText  = currentOperationText
       this.currentOperation = ""

      }

      addDigit(digit) {
         if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return
         }
         this.currentOperation = digit
         this.updateScreen()
      }

      processOperation(operation) {
       
         if(this.currentOperationText.innerText === ""  && operation !=="C") {
            if(this.previousOperationText.innerText !== "") {
                  this.changeOperation(operation)
            }
            
            return
         }

         let operationValue
         const previous = +this.previousOperationText.innerText.split(" ")[0]
         const current = +this.currentOperationText.innerText

         switch(operation) {
            case "+" :
               operationValue = previous + current
               this.updateScreen( operationValue,operation ,current ,previous)
               break
              
             case "-" :
               operationValue = previous - current
               this.updateScreen( operationValue,operation ,current ,previous)
               break

            case "/" :
               operationValue = previous / current
               this.updateScreen( operationValue,operation ,current ,previous)
               break

            case "*" :
               operationValue = previous * current
               this.updateScreen( operationValue,operation ,current ,previous)
                break
            case "DEL" :
                this.processDelOperator()
                break
            case "CE" :
                this.processClearCurrentOperation()
                break
                
            case "C" :
                this.processClearCurrentOperationandPreviousOperation()
                break
                  default:
                     return
               
               
               
               
         }
          

      }

   
      updateScreen (
          operationValue = null, 
          operation =null ,
          current = null, 
          previous =null
      ) 
      {

     
        if ( operationValue === null) {
          this.currentOperationText.innerText += this.currentOperation
        } else {
            if(previous === 0) {
               operationValue = current
            }
            this.previousOperationText.innerText = `${operationValue} ${operation} `
            this.currentOperationText.innerText = ""
        }
        operation) {

          const mathOperations =["*" , "/", "+" , "-"]

          if(!mathOperations.includes(operation)) {
            return
          }

       t
       
       this.previousOperationText.innerText.slice(0,-1) + operation 
      } 

     this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0,-1)
     }
   processClearCurrentOperation() {
      this.currentOperationText.innerText = ""
   }
   
   processClearCurrentOperationandPreviousOperation()  {
          this.currentOperationText.innerText = ""
          this.previousOperationText.innerText = ""

   }
                     
               
 }

 const previousOperationText = document.querySelector("#previous-operation")
 const currentOperationText = document.querySelector("#current-operation")
 const buttons = document.querySelectorAll("#buttons-container button")

 const calc = new Calculator (previousOperationText,currentOperationText)

   

 buttons.forEach  ((btn) => {
  btn.addEventListener("click",(e) => {
     const value = e.target.innerText
     

     if (+value >=0 || value === "." ) {
         calc.addDigit(value)
     } else {
          calc.processOperation(value)
     }
  })

 })


