const track = document.getElementById("track");
const slides = track.children;
let index = 0;

// Show the first image initially
slides[index].style.opacity = 1;

// Fade every 20 seconds
setInterval(() => {
  // Fade out current slide
  slides[index].style.opacity = 0;

  // Move to next slide (loop back at end)
  index = (index + 1) % slides.length;

  // Fade in next slide
  slides[index].style.opacity = 1;
}, 10000); // 20000ms = 20 seconds
