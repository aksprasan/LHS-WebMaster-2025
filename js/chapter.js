document.addEventListener("DOMContentLoaded", () => {

  /* ---------- STICKY NAVBAR ---------- */
  const navbar = document.querySelector('.navbar');
  const topNavbar = document.querySelector('.top-navbar');
  
  function handleNavbarSticky() {
    const topNavbarHeight = topNavbar ? topNavbar.offsetHeight : 0;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > topNavbarHeight) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }
  
  window.addEventListener('scroll', handleNavbarSticky);
  handleNavbarSticky(); // run once on load

  /* ---------- NAVBAR LINK SCROLL TO TOP OF SECTIONS ---------- */
  const navLinks = document.querySelectorAll('.navbar a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Special handling for Introduction - scroll to bottom of carousel
        if (targetId === 'about') {
          const carousel = document.querySelector('.carousel');
          if (carousel) {
            carousel.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }
        } else {
          // Scroll to the very top of the section (where it meets the previous division)
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

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

  /* ---------- TSA INFO ANIMATE ON SCROLL ---------- */
  const tsaSection = document.getElementById('tsaInfoSection');
  const tsaWhoSection = document.getElementById('tsaWhoSection');

  function onScroll() {
    if (tsaWhoSection) {
      const rectWho = tsaWhoSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rectWho.top < windowHeight - 100) {
        tsaWhoSection.classList.add('animate-up-active');
      } else {
        tsaWhoSection.classList.remove('animate-up-active');
      }
    }

    if (tsaSection) {
      const rect = tsaSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight - 100) {
        tsaSection.classList.add('animate-up-active');
      } else {
        tsaSection.classList.remove('animate-up-active');
      }
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // run once on load

  /* ---------- SECTION ANIMATIONS ON SCROLL ---------- */
  const animatedSections = document.querySelectorAll('.section-animate');
  
  function checkSectionAnimations() {
    animatedSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Trigger animation when section is 20% visible
      if (rect.top < windowHeight - (windowHeight * 0.2)) {
        section.classList.add('animate-in');
      }
    });
  }
  
  window.addEventListener('scroll', checkSectionAnimations);
  checkSectionAnimations(); // run once on load

  /* ---------- EVENTS TABS ---------- */
  const eventTabs = document.querySelectorAll('.event-tab');
  const eventPanels = document.querySelectorAll('.event-panel');

  eventTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      
      // Remove active class from all tabs and panels
      eventTabs.forEach(t => t.classList.remove('active'));
      eventPanels.forEach(p => p.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding panel
      tab.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

  /* ---------- TSA QUIZ BUTTON ---------- */
  const tsaQuizBtn = document.querySelector('.tsa-info-btn');
  if (tsaQuizBtn) {
    tsaQuizBtn.addEventListener('click', () => {
      window.location.href = '../Interactive/quiz.html';
    });
  }

  /* ---------- ACTIVITY SHOWCASE CARDS ---------- */
  const activityCards = document.querySelectorAll('.activity-card');
  
  activityCards.forEach(card => {
    card.addEventListener('click', () => {
      const isExpanded = card.classList.contains('expanded');
      
      if (isExpanded) {
        // Collapse the card and show all others
        card.classList.remove('expanded');
        activityCards.forEach(otherCard => {
          otherCard.classList.remove('hidden');
        });
      } else {
        // Expand the card and hide all others
        activityCards.forEach(otherCard => {
          if (otherCard !== card) {
            otherCard.classList.remove('expanded');
            otherCard.classList.add('hidden');
          }
        });
        card.classList.add('expanded');
        card.classList.remove('hidden');
      }
    });
  });

  /* ---------- OFFICERS CAROUSEL ---------- */
  const officersCarousel = document.querySelector('.officers-carousel');
  const officerSlides = document.querySelectorAll('.officer-slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let currentSlide = 0;

  function showSlide(n) {
    if (n >= officerSlides.length) currentSlide = 0;
    if (n < 0) currentSlide = officerSlides.length - 1;
    
    // Remove active class from all slides
    officerSlides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to current slide
    if (officerSlides[currentSlide]) {
      officerSlides[currentSlide].classList.add('active');
    }
    
    // Calculate positioning to center the active section perfectly
    // Each slide takes 63vw (55vw card + 8vw margins)
    const slideWidth = window.innerWidth * 0.63; // 63% of viewport width
    const viewportCenter = window.innerWidth / 2; // Center of the viewport
    const slideCenter = slideWidth / 2; // Center of each slide
    const translateX = viewportCenter - slideCenter - (currentSlide * slideWidth);
    
    if (officersCarousel) {
      officersCarousel.style.transform = `translateX(${translateX}px)`;
    }
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide--;
      showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
      currentSlide++;
      showSlide(currentSlide);
    });
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    showSlide(currentSlide);
  });

  // Initialize first slide
  if (officerSlides.length > 0) {
    showSlide(0);
  }

});
  /* ---------- PAST PROJECTS CAROUSEL ---------- */
  const pastProjectsCarousel = document.querySelector('.past-projects-carousel');
  const projectSlides = document.querySelectorAll('.project-slide');
  const pastProjectsPrevBtn = document.querySelector('.past-projects-prev');
  const pastProjectsNextBtn = document.querySelector('.past-projects-next');
  let currentProjectSlide = 1; // Start at index 1 (Project 1, with Project 5 on the left)
  const totalOriginalSlides = 5; // Number of original slides
  const slideWidth = 400; // 350px width + 50px margins

  function showProjectSlide(n, instant = false) {
    const containerWidth = pastProjectsCarousel.parentElement.offsetWidth;
    const translateX = (containerWidth / 2) - (slideWidth / 2) - (n * slideWidth);
    
    if (pastProjectsCarousel) {
      if (instant) {
        pastProjectsCarousel.style.transition = 'none';
        pastProjectsCarousel.style.transform = `translateX(${translateX}px)`;
        // Force reflow
        pastProjectsCarousel.offsetHeight;
        pastProjectsCarousel.style.transition = 'transform 0.5s ease';
      } else {
        pastProjectsCarousel.style.transform = `translateX(${translateX}px)`;
      }
    }
    
    // Update active class
    projectSlides.forEach(slide => slide.classList.remove('active'));
    if (projectSlides[n]) {
      projectSlides[n].classList.add('active');
    }
  }

  function nextProjectSlide() {
    currentProjectSlide++;
    showProjectSlide(currentProjectSlide);
    
    // Check if we've reached the duplicate at the end (index 6)
    if (currentProjectSlide === 6) {
      setTimeout(() => {
        currentProjectSlide = 1; // Jump back to real Project 1
        showProjectSlide(currentProjectSlide, true);
      }, 500); // Wait for transition to complete
    }
  }

  function prevProjectSlide() {
    currentProjectSlide--;
    showProjectSlide(currentProjectSlide);
    
    // Check if we've reached the duplicate at the beginning (index 0)
    if (currentProjectSlide === 0) {
      setTimeout(() => {
        currentProjectSlide = 5; // Jump to real Project 5
        showProjectSlide(currentProjectSlide, true);
      }, 500); // Wait for transition to complete
    }
  }

  // Handle arrow key navigation for past projects
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevProjectSlide();
    } else if (e.key === 'ArrowRight') {
      nextProjectSlide();
    }
  });

  if (pastProjectsPrevBtn && pastProjectsNextBtn) {
    pastProjectsPrevBtn.addEventListener('click', () => {
      prevProjectSlide();
    });

    pastProjectsNextBtn.addEventListener('click', () => {
      nextProjectSlide();
    });
  }

  // Handle window resize for past projects
  window.addEventListener('resize', () => {
    showProjectSlide(currentProjectSlide, true);
  });

  // Initialize with Project 1 active and Project 5 visible on the left
  if (projectSlides.length > 0) {
    showProjectSlide(1); // Start at index 1 (Project 1)
  }