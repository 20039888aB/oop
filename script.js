document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      const slides = document.querySelectorAll(".mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade-in");
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].classList.add("fade-in");
      setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const surgeryLinks = document.querySelectorAll('.surgery-link');
    const infoBox = document.getElementById('info-box');
    const infoText = document.getElementById('surgery-info');

    function handleClick(event) {
        event.preventDefault();
        infoText.textContent = this.dataset.info;
        infoBox.classList.add('expanded');
        // Remove event listeners after a link is clicked
        surgeryLinks.forEach(link => {
            link.removeEventListener('click', handleClick);
        });
    }

    surgeryLinks.forEach(link => {
        link.addEventListener('click', handleClick);
    });

    infoBox.addEventListener('click', function() {
        this.classList.remove('expanded');
        infoText.textContent = 'Click on a type of surgery to learn more.';
        // Add event listeners back after closing the info box
        surgeryLinks.forEach(link => {
            link.addEventListener('click', handleClick);
        });
    });
});
