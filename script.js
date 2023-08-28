// Function to handle the media query change
function handleMediaQuery(mediaQuery) {
    const element = document.querySelector('.testimonial_cards'); // Select the first element
    const element_2 = document.querySelector('.testimonial_cards_bg'); // Select the second element
  
    if (mediaQuery.matches) {
      element.classList.add('hidden'); // Add 'hidden' class to the first element
      element_2.classList.remove('hidden'); // Remove 'hidden' class from the second element
    } else {
      element.classList.remove('hidden'); // Remove 'hidden' class from the first element
      element_2.classList.add('hidden'); // Add 'hidden' class to the second element
    }
  }
  
  // Create a media query to match screen width
  const mediaQuery = window.matchMedia('(min-width: 769px)');
  
  // Initial check when the page loads
  handleMediaQuery(mediaQuery);
  
  // Listen for changes in the media query
  mediaQuery.addEventListener('change', handleMediaQuery);
  