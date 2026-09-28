 const postsContainer = document.querySelector("#posts-container") 
 const loading = document.querySelector("#loading")
 const url = "https://jsonplaceholder.typicode.com/posts"
 const postContainer = document.querySelector("#post-container")
 const  commentform = document.querySelector("#comment-form")
 const  urlSearchParams = new  URLSearchParams(window.location.search)
 const postid = urlSearchParams.get("id")
 const  opinioescontainer = document.querySelector("#opinioes-container")
 const emailInput = document.querySelector("#email")
 const bodyInput = document.querySelector("#body")
  

 async function getAllPost () {
    const response =  await fetch(url)
    const data = await response.json()
    loading.classList.add("hide")
 
    

    data.map((post) => {
         const title = document.createElement("h2") 
         const body = document.createElement ("p")
         const div = document.createElement("div")
         const link = document.createElement("a")

         title.innerText = post.title
         body.innerText = post.body
         link.innerHTML = "Ler mais"

         link.setAttribute("href",`/postcopy.html?id=${post.id}`)
           

         div.appendChild(title)
         div.appendChild(body)
         div.appendChild(link)
         console.log(div)
         postsContainer.appendChild(div)
         
         
        
        




    }) 

 }
  async function getPost(id) {

      const [responsePost,responseComment] = await Promise.all ([

          fetch(`${url}/${id}`),
          fetch(`${url}/${id}/comments`)
      ])
    
     const dataPost =  await responsePost.json()
     const datacomments =  await responseComment.json()
      loading.classList.add("hide")
   


   

         const title = document.createElement("h2") 
         const body = document.createElement ("p")
         const div = document.createElement("div")

         
         title.innerText = dataPost.title
         body.innerText = dataPost.body

         
         div.appendChild(title)
         div.appendChild(body)
         postContainer.appendChild(div)
         
         
      
      datacomments.map((comments) => {
           creatComment(comments)
          })

        
    

    }  


    function  creatComment (comments) {
         const email = document.createElement("h3") 
         const body = document.createElement ("p")
         const div = document.createElement("div")
          

         email.innerText = comments.email
         body.innerText = comments.body
         div.appendChild(email)
         div.appendChild(body)
         opinioescontainer.appendChild(div)

   }

    async function postComment (comment) {
      
      const response = await fetch(`${url}/${postid}/comments`,{

       method:"POST",
       body:comment,
       headers:{
          "Content-type": "application/json",
       },

      })

      const data =  await response.json()

       creatComment(data)
    }




 if (!postid) {
    getAllPost()
 } else {
   getPost(postid) 

   commentform.addEventListener("submit" ,(e) => {
     e.preventDefault()

   let comment  =  {
      email:emailInput.value,
      body:bodyInput.value,

   }

   comment = JSON.stringify(comment)

   postComment(comment)
   })

  emailInput.value = " "
  bodyInput.value  = " "



 }

 
 


