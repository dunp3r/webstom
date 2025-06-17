document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('carousel');
    const leftBtn = document.getElementById('leftArrow');
    const rightBtn = document.getElementById('rightArrow');

    const scrollAmount = () => container.clientWidth;

    leftBtn.addEventListener('click', () => {
      if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
      }
    });

    rightBtn.addEventListener('click', () => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollLeft = 0;
      } else {
        container.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
      }
    });

    // --- Scroll automático cada 3 segundos ---
    setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
      }
    }, 3000); // 3000 ms = 3 segundos
  });