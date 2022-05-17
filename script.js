const $sideBar = document.querySelector(".side-navigation")
const $menuIcon = document.querySelector(".menu-icon")
const $crossIcon = document.querySelector(".cross-icon")
const $naveLinks = document.querySelector(".id")

function myfunction(x){
    if (x.matches) { // If media query matches
        $crossIcon.style.display = "none"
        $menuIcon.style.display = "initial"
        $sideBar.style.top = "-100%"
        
        $menuIcon.addEventListener("click", function(){
            $sideBar.style.top = "65px"
            $sideBar.style.transition = "all 0.4s ease 0s"
            $menuIcon.style.display = "none"
            $crossIcon.style.display = "initial"
            // menuIcon.addEventListener("mouseout", function(){
            //     sideBar.style.left = "-100%"
            // })
            $naveLinks.addEventListener("click", function(){
                $sideBar.style.top = "-100%"
            })
            $crossIcon.addEventListener("click", function(){
                $sideBar.style.top = "-100%"
                $menuIcon.style.display = "initial"
                $crossIcon.style.display = "none"
            })
        })
    }else {
        $crossIcon.style.display = "none"
        $menuIcon.style.display = "none"
    }
}
let x = window.matchMedia("(max-width: 1100px)")
myfunction(x)
x.addListener(myfunction)
