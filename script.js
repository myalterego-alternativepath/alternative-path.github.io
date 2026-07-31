const topbar = document.getElementById('topbar');
const drawer = document.getElementById('drawer');
const menuBtn = document.getElementById('menuBtn');
const navLinks = [...document.querySelectorAll('.bottom-nav a')];

let lastY = window.scrollY;

menuBtn?.addEventListener('click', () => {
  drawer.classList.toggle('open');
});

drawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => drawer.classList.remove('open'));
});

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > lastY && y > 100) topbar.classList.add('hidden');
  else topbar.classList.remove('hidden');
  lastY = y;

  const sections = [...document.querySelectorAll('main > section')];
  let current = 'home';
  for (const section of sections) {
    if (y >= section.offsetTop - 180) current = section.id;
  }
  const map = current === 'chapter-1' ? 'comic' : current;
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${map}`);
  });
}, { passive: true });

document.addEventListener('click', (event) => {
  if (!drawer.contains(event.target) && !menuBtn.contains(event.target)) {
    drawer.classList.remove('open');
  }
});
