// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

hamburger.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    navLinks.classList.toggle('active');
  }
});

// Character Cards Dynamic Details (Optional if using data attributes)
const characterCards = document.querySelectorAll('.character-card');

characterCards.forEach(card => {
  card.addEventListener('mouseover', function() {
    const name = this.getAttribute('data-name');
    const description = this.getAttribute('data-description');
    const infoDiv = this.querySelector('.character-info');
    infoDiv.innerHTML = `<h3>${name}</h3><p>${description}</p>`;
  });
  
  card.addEventListener('focus', function() {
    const name = this.getAttribute('data-name');
    const description = this.getAttribute('data-description');
    const infoDiv = this.querySelector('.character-info');
    infoDiv.innerHTML = `<h3>${name}</h3><p>${description}</p>`;
  });
});

// Carousel Functionality
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let scrollAmount = 0;
const scrollPerClick = 300;

prevButton.addEventListener('click', () => {
  carousel.scrollBy({
    top: 0,
    left: -scrollPerClick,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  carousel.scrollBy({
    top: 0,
    left: scrollPerClick,
    behavior: 'smooth'
  });
});

// Enable keyboard navigation for carousel
prevButton.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    carousel.scrollBy({
      top: 0,
      left: -scrollPerClick,
      behavior: 'smooth'
    });
  }
});

nextButton.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    carousel.scrollBy({
      top: 0,
      left: scrollPerClick,
      behavior: 'smooth'
    });
  }
});
