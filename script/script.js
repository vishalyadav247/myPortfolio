console.log("welcome to javascript");

// navbar animation on scroll
let navbar = document.querySelector('header')
window.addEventListener('scroll', function (event) {
    event.preventDefault()
    if (window.scrollY <= 570) {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.borderBottom = '0'

    } else {
        navbar.style.backgroundColor = 'grey';
    }
})

// type effect
let typed = new Typed(".animated_text", {
    strings: ["I'm a Web Developer", "I Love to Design UI"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
})

// Menu show hide button
let menuSideBar = document.getElementById("bar");
let menuLinks = document.getElementById("allLinks");
let navBar = document.getElementById("nav")
var state = false;

menuSideBar.addEventListener("click", function () {
    if (state == false) {
        show();
        state = true;
    }
    else {
        hide();
        state = false
    }

})

function show() {
    menuLinks.style.display = "block";
    menuLinks.style.height = "auto"
    navBar.style.backgroundColor = "rgb(255, 164, 148)";
}
function hide() {
    menuLinks.style.display = "none"
    navBar.style.backgroundColor = "transparent"
}