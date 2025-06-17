window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const links = navbar.querySelectorAll('.nav-link');
    const svgIcons = navbar.querySelectorAll('svg');

    if (window.scrollY > 10) {
      navbar.classList.remove('bg-transparent', 'text-white');
      navbar.classList.add('bg-white', 'text-gray-900', 'shadow-lg');

      // Cambiar color de texto de los links
      links.forEach(link => link.classList.add('text-gray-800'));
      links.forEach(link => link.classList.remove('text-white'));

      // Cambiar iconos SVG si quieres que también cambien
      svgIcons.forEach(icon => icon.classList.add('text-gray-800'));
      svgIcons.forEach(icon => icon.classList.remove('text-white'));

    } else {
      navbar.classList.add('bg-transparent', 'text-white');
      navbar.classList.remove('bg-white', 'text-gray-900', 'shadow-lg');

      links.forEach(link => link.classList.remove('text-gray-800'));
      links.forEach(link => link.classList.add('text-white'));

      svgIcons.forEach(icon => icon.classList.remove('text-gray-800'));
      svgIcons.forEach(icon => icon.classList.add('text-white'));
    }
  });

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('site-logo');

    if (window.scrollY > 10) {
      navbar.classList.add('bg-white', 'text-black');
      navbar.classList.remove('bg-transparent', 'text-white');

      // Logo cambia a azul
      logo.classList.remove('text-white');
      logo.classList.add('text-indigo-700');
    } else {
      navbar.classList.add('bg-transparent', 'text-white');
      navbar.classList.remove('bg-white', 'text-black');

      // Logo vuelve a blanco
      logo.classList.remove('text-indigo-600');
      logo.classList.add('text-white');
    }
  });