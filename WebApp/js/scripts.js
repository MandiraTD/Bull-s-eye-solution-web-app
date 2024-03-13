let index = 0; // Current slide index

function moveSlide(step) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  index = (index + step + totalSlides) % totalSlides; // Calculate the index
  const offset = -index * 100; // Calculate the offset
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`; // Move the slide
}

// Optional: add automatic slide functionality
setInterval(() => moveSlide(1), 3000); // Change slide every 3 seconds


// Define the functions to open social media pages
function openFacebook() {
  window.open('https://www.facebook.com/', '_blank');
}

function openTwitter() {
  window.open('https://twitter.com/', '_blank');
}

function openLinkedIn() {
  window.open('https://www.linkedin.com/', '_blank');
}

function openGithub() {
  window.open('https://github.com/', '_blank');
}

