/* The Great Pennington Migration — shared behavior
   1. Countdown to move day   2. Reveal-on-scroll   3. Nav active link
   ------------------------------------------------------------------ */

/* 1. COUNTDOWN ----------------------------------------------------
   Departure: evening of July 2, 2026, pulling out of the driveway at
   26 Hampton Dr, Manchester CT (Eastern time). Edit this one line to change it. */
const MOVE_DAY = new Date('2026-07-02T18:00:00-04:00');

function tickCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const diff = MOVE_DAY - new Date();

  if (diff <= 0) {
    el.innerHTML = '<div class="cd-done">We\'re here. Welcome home.</div>';
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  const unit = (n, l) => `<div class="cd-unit"><div class="cd-num">${n}</div><div class="cd-lbl">${l}</div></div>`;
  el.innerHTML = unit(d, 'days') + unit(h, 'hours') + unit(m, 'min') + unit(s, 'sec');
}
tickCountdown();
setInterval(tickCountdown, 1000);

/* 2. REVEAL ON SCROLL --------------------------------------------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (Math.min(i % 5, 4) * 0.06) + 's';
  io.observe(el);
});
/* hero reveals fire right away */
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal').forEach((el, i) => setTimeout(() => el.classList.add('in'), 100 + i * 110));
});

/* 3. NAV ACTIVE LINK ---------------------------------------------- */
(function () {
  const here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) a.classList.add('on');
  });
})();

/* 4. SERVICE WORKER (installable + offline) ----------------------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
