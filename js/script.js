// click allert

let btnElement = document.getElementById("send-btn");
btnElement.addEventListener("click", function name(params){
    alert("Thanks For Your Feedback!")  
})

// burger-bar funcional

let navBar = document.getElementById("navigation");
let burgerBar = document.getElementById("burger-bar");

burgerBar.addEventListener('click', function(){
    navBar.classList.toggle("active");
})



// document.addEventListener("DOMContentLoaded", () => {
//   const burger = document.getElementById("burger-bar");
//   const nav = document.querySelector(".nav-list");

//   if (burger && nav) {
//     burger.addEventListener("click", () => {
//       nav.classList.toggle("active");
//     });
//   }
// });



