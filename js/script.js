let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

document.addEventListener('DOMContentLoaded', function(){
  let menuButton = document.querySelector('.menu-button');
  let menu = document.querySelector('.nav-mainmenu');

  menuButton.addEventListener('click', function() {
    menu.classList.toggle('hidden');
  });
})
