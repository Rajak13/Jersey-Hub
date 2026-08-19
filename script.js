// ==========================================================
// Jersey Hub Nepal — Interactive Sport Selector Controller
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
  const activeHeroImg = document.getElementById('activeHeroImg');
  const sportButtons = document.querySelectorAll('.sport-circle-btn');

  // Sport category imagery mapping
  const sportImageMap = {
    football: 'images/football-jerseys.jpg',
    cricket: 'images/cricket-circle.jpg',
    basketball: 'images/basketball.jpg'
  };

  sportButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const sport = button.dataset.sport;
      const targetImage = button.dataset.image || sportImageMap[sport];

      if (button.classList.contains('active') || !targetImage) return;

      // Update active button state
      sportButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      // Smooth crossfade on SVG image element
      if (activeHeroImg) {
        activeHeroImg.style.opacity = '0';
        
        setTimeout(() => {
          activeHeroImg.setAttribute('href', targetImage);
          activeHeroImg.style.opacity = '1';
        }, 180);
      }
    });
  });
});
