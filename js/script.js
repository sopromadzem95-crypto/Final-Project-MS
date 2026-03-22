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


