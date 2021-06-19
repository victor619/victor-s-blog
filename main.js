
window.addEventListener("scroll",()=>{
const nav = document.getElementsByTagName("nav")[0]
const logo = nav.children[0].children[0].children[0].textContent
const links =  nav.children[0].children[1].children[0].children
nav.style.opacity = "0"
    if(window.scrollY >= 437){
    nav.style.opacity = "1"
    nav.style.backgroundColor = "black"
    }

    else if(window.scrollY == "0"){
      nav.style.opacity = "1"
    }
    
    else{
        nav.style.backgroundColor = ""
       
        }
})