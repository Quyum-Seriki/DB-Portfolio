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
for (i = 0; i < a.length;i++){
    a[i].addEventListener("click",()=>{
        sideBar.style.display = "none"
    })
}
