document.addEventListener("DOMContentLoaded", () => {

  /* ---------- CAROUSEL ---------- */
  const track = document.getElementById("track");
  const slides = track.querySelectorAll("img");
  let index = 0;

  slides[index].style.opacity = 1;

  setInterval(() => {
    slides[index].style.opacity = 0;
    index = (index + 1) % slides.length;
    slides[index].style.opacity = 1;
  }, 6000); // faster slide timing

  /* ---------- TYPEWRITER ---------- */
  const text = "Our Chapter";
  const speed = 130; // slower typing
  let i = 0;
  const heading = document.getElementById("demo");

  function typeWriter() {
    if (i < text.length) {
      heading.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();

});
