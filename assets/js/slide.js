var slideIndex = 0;
showSlides();

function showSlides() {
  var g;
  var slides = document.querySelectorAll(".img-slide");
  for (g = 0; g < slides.length; g++) {
    slides[g].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); 
}