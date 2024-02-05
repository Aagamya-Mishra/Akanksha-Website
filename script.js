var sidebar = document.querySelector(".sidebar")
function showside() {
    sidebar.style.display = "flex"
}
function closeside() {
    sidebar.style.display = "none"
}

// Gsap
// landing page starts
// var tl = gsap.timeline()
// tl.from(".nav",{
//     opacity:0,
//     duration:0.5
// })
// tl.from(".nav>a",{
//     opacity:0,
//     x:-50
// })
// tl.from(".nav-right a",{
//     opacity:0,
//     x:-50,
//     stagger:0.3
// })
// tl.from(".left h1 , .left p",{
//     opacity:0,
//     y:50,
//     duration:0.5,
//     stagger:0.5
// })
// tl.from(".left button",{
//     opacity:0,
//     duration:0.5
// })
// tl.from(".right ",{
//     opacity:0,
//     duration:1
// })
//landing page ends