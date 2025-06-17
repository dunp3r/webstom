document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navContent = document.getElementById('nav-content');

    navToggle.addEventListener('click', function() {
      // Alterna la clase 'open' en el botón
      navToggle.classList.toggle('open');

      // Alterna la visibilidad del menú
      if (navContent.classList.contains('max-h-0')) {
        navContent.classList.remove('max-h-0');
        navContent.classList.add('max-h-screen');
      } else {
        navContent.classList.remove('max-h-screen');
        navContent.classList.add('max-h-0');
      }
    });

    // Opcional: Cerrar el menú al hacer clic en un enlace (si los enlaces son internos y no recargan la página)
    const navLinks = navContent.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navToggle.classList.contains('open')) {
          navToggle.classList.remove('open');
          navContent.classList.remove('max-h-screen');
          navContent.classList.add('max-h-0');
        }
      });
    });
  });