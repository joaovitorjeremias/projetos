  window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav-align');
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  })