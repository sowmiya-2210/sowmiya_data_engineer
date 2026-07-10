// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
  siteNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => siteNav.classList.remove('open')));
}

// Highlight active nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path) a.classList.add('active');
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('in-view'));
}

// Animate pipeline trace steps sequentially on load
const steps = document.querySelectorAll('.trace-step');
steps.forEach((el, i) => {
  setTimeout(() => el.classList.add('on'), 350 + i * 260);
});
