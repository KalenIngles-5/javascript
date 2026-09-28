

 function addTask() {  
     const taskTitle = document.querySelector("#task-title").value
     const template = document.querySelector(".template")
     const newTask = template.cloneNode(true)
     const input = document.querySelector("#task-title")
     const ytask =  newTask.querySelector(".y-task")
     const  tas = newTask.querySelector(".task-title")

    
     



     if(taskTitle && isNaN(taskTitle)) {

       newTask.querySelector(".task-title").textContent = taskTitle
       newTask.classList.remove("template")
       newTask.classList.remove("hide")

       const  task = document.querySelector("#y-task-container")

       task.appendChild(newTask)

       const xmark =  newTask.querySelector(".fa-xmark") 
       const check =  newTask.querySelector(".fa-check")

       xmark.addEventListener("click", function(e) {

        newTask.classList.toggle("active")
       })

       check.addEventListener("click", function(e) {

         ytask.classList.toggle("active2")
         tas.classList.toggle("active2")

        
       })

       input.value = " "
     }
 } 
 const addBtn = document.querySelector("#add-btn")

 addBtn.addEventListener("click", function() {

    addTask()
 })

 



  


