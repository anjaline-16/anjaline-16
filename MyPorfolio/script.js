(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  // Theme persistence
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');

  function setTheme(light){
    root.classList.toggle('light', !!light);
    localStorage.setItem('theme', light ? 'light' : 'dark');
    themeToggle.textContent = light ? '☀️' : '🌙';
  }
  setTheme(root.classList.contains('light'));

  themeToggle.addEventListener('click', ()=> setTheme(!root.classList.contains('light')));

  // Mobile nav
  navToggle.addEventListener('click', ()=>{
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
        navMenu.classList.remove('open');
      }
    });
  });
})();
