// contact.js

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.contact-container');
  
    function createStars(numStars) {
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        container.appendChild(star);
      }
    }
  
    createStars(10); // Adjust the number of stars as needed
  });
  