//popup//
// Function to show the contact form popup
function showContactFormPopup() {
  var modal = document.getElementById("contactFormPopup");
  modal.style.display = "block";
}

// Function to close the contact form popup
function closeContactFormPopup() {
  var modal = document.getElementById("contactFormPopup");
  modal.style.display = "none";
}
//Show the contact form popup when the page is reloaded
window.onload = function () {
  showContactFormPopup();
};
//Popup End//

// Second Pop Up
// function showContactFormPopupp() {
//   var modall = documengetElementById("contactFormPopupp");
//   modall.style.display = "block";
// }
// // Function to close the contact form popup
// function closeContactFormPopupp() {
//   var modall = document.getElementById("contactFormPopupp");
//   modall.style.display = "none";
// }
//Second Pop UP
//Navigation bar//
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//Home
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active2";
}

function autoSlide2() {
  plusSlides2(1);
}

// Automatically advance the slides every 3 seconds
setInterval(autoSlide2, 3000);

//Home End

//Gallery
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//Gallery end

//Switch tab//

function switchTab(tabNumber) {
  // Hide all content sections
  for (var i = 1; i <= 6; i++) {
    var content = document.getElementById(`content${i}`);
    content.style.display = "none";
  }

  // Show the selected content section
  var selectedContent = document.getElementById(`content${tabNumber}`);
  selectedContent.style.display = "flex"; // Use "flex" or "block" based on your styling
}
//Switch Tabb End
//Pop Start

//Pop up End
