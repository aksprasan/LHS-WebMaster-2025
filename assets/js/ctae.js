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
  handleNavbarSticky();

  /* ---------- NAVBAR LINK SCROLL TO TOP OF SECTIONS ---------- */
  const navLinks = document.querySelectorAll('.navbar a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- EVENTS TABS ---------- */
  const eventTabs = document.querySelectorAll('.event-tab');
  const eventPanels = document.querySelectorAll('.event-panel');

  eventTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      
      eventTabs.forEach(t => t.classList.remove('active'));
      eventPanels.forEach(p => p.classList.remove('active'));
      
      tab.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

});