(function(){
  const burger = document.querySelector('[data-burger]');
  const nav = document.querySelector('[data-nav]');
  const drops = Array.from(document.querySelectorAll('[data-drop]'));

  function closeAllDrops(except=null){
    drops.forEach(d => { if(d!==except) d.classList.remove('open'); });
  }

  if(burger && nav){
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      closeAllDrops();
    });
  }

  drops.forEach(d => {
    const btn = d.querySelector('button');
    if(btn){
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = d.classList.contains('open');
        closeAllDrops(d);
        d.classList.toggle('open', !isOpen);
      });
    }
  });

  document.addEventListener('click', (e) => {
    const insideDrop = e.target.closest('[data-drop]');
    const insideNav = e.target.closest('[data-nav]');
    if(!insideDrop) closeAllDrops();
    if(!insideNav && nav && nav.classList.contains('open')){
      nav.classList.remove('open');
      closeAllDrops();
    }
  });
})();
