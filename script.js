let img = document.querySelectorAll("img")
let a = document.querySelectorAll(".an")
let sideBar = document.querySelector(".sidebar")
img[2].addEventListener("click",()=>{
    sideBar.style.display = "block"
    sideBar.style.transition = "2s all"
})
img[1].addEventListener("click",()=>{
    sideBar.style.display = "none"
})