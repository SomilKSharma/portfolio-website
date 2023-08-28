function handleMediaQuery(mediaQuery) {
    const element = document.querySelector('.testimonial_cards');
    const element_2 = document.querySelector('.testimonial_cards_bg');
  
    if (mediaQuery.matches) {
      element.classList.add('hidden');
      element_2.classList.remove('hidden');
    } else {
      element.classList.remove('hidden');
      element_2.classList.add('hidden');
    }
  }
  
  const mediaQuery = window.matchMedia('(min-width: 769px)');
  handleMediaQuery(mediaQuery); // Initial check
  
  mediaQuery.addEventListener('change', handleMediaQuery); // Listen for changes