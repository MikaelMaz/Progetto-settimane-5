window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    let butt = document.getElementById('verde')
    if (nav) {
      if (window.scrollY > 250) {
        nav.style.backgroundColor = 'white';
      } else {
        nav.style.backgroundColor = '';
      }
    }
    if (butt) {
        if (window.scrollY > 250) {
          butt.style.backgroundColor = 'green';
        } else {
          butt.style.backgroundColor = '';
        }
      }
  });