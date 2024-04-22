let mybutton = document.getElementById("myBtn");
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       mybutton.style.display = "block";
//     } else {
//       mybutton.style.display = "none";
//     }
//   }

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

ScrollReveal().reveal('.image', { delay: 200 });

// const imgs = document.querySelectorAll('img');
// const fullPage = document.querySelector('#photographyFullpage');
// function popUp(){

// imgs.forEach(img => {
//   img.addEventListener('click', function() {
//     fullPage.style.backgroundImage = 'url(' + img.src + ')';
//     console.log('click working')
//     fullPage.style.display = 'block';
//   });
// });
// }

