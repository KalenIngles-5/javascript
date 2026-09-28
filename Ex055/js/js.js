const url = "https://jsonplaceholder.typicode.com/posts"

const loadingElement = document.querySelector("#loading")

const postsContainer = document.querySelector("#posts-container")

const postPage = document.querySelector("#post")

const commentsForm = document.querySelector("#comment-form")
const emailInput = document.querySelector("#email")
const bodyInput = document.querySelector("#body")

const postContainer = document.querySelector("#post-container")
const commenstsContain = document.querySelector("#comments-container")
const urlSesrchParams = new URLSearchParams(window.location.search)

const postid = urlSesrchParams.get("id")

async function getAllPosts() {
    

    const response = await fetch(url)
    console.log(response)
      
    const data = await response.json()

     loadingElement.classList.add("hide")

    data.map((post)  => {
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")
         


        title.innerText = post.title
        body.innerText = post.body
        link.innerText = "ler mais"
        link.setAttribute("href", `/post.html?id=${post.id}`)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)
        postsContainer.appendChild(div)

    })

}


async function getPost (id) {
     
    const [responsePost,responseCommnets] = await Promise.all([

        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

     const dataPost =  await responsePost.json ()
     const dataComents = await responseCommnets.json ()
     loadingElement.classList.add("hide")
     postPage.classList.remove("hide")

    const title = document.createElement("h2")
    const body = document.createElement("p")

    title.innerText = dataPost.title
    body.innerText = dataPost.body

   
    postContainer.prepend(body)
    postContainer.prepend(title)

    dataComents.map((comments)=>{
       creatcomment(comments)
    })
}

  function creatcomment(comments) {

      const div = document.createElement("div")
      const body = document.createElement("p")
      const email = document.createElement("h3")
       
      email.innerHTML = comments.email
      body.innerHTML = comments.body
      
      div.appendChild(email)
      div.appendChild(body)
      commenstsContain.appendChild(div)

  }
   async function postComment (comment) {

    const response = await fetch(`${url}/${postid}/comments`, {

        method:"POST",
        body:comment,
        headers:{
            "Content-type": "application/json",
        },

    })

  const data = await response.json()
  console.log(data)
   }
 



 if(!postid) {
    getAllPosts()
 } else{
    getPost(postid)
    commentsForm.addEventListener("submit",(e) => {
        e.preventDefault()

        let comment = {
            email: emailInput.value,
            body:bodyInput.value,

        }

        comment = JSON.stringify(comment)

        postComment(comment)
    })
 }

 


