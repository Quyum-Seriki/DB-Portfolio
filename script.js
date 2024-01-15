let img = document.querySelectorAll("img")
let a = document.querySelectorAll(".an")
let sec = document.querySelector(".section1")
let sideBar = document.querySelector(".sidebar")
img[2].addEventListener("click",()=>{
    sideBar.style.display = "block"
    sideBar.style.transition = "2s all"
    sec.children[0].style.position = "static"
    sec.children[1].style.position = "static"
})
img[1].addEventListener("click",()=>{
    sideBar.style.display = "none"
    sec.children[0].style.position = "relative"
    sec.children[1].style.position = "relative"
})
for (i = 0; i < a.length;i++){
    a[i].addEventListener("click",()=>{
        sideBar.style.display = "none"
    })
}
