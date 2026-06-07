/* The Great Pennington Migration — shared behavior
   1. Countdown to move day   2. Reveal-on-scroll   3. Nav active link
   ------------------------------------------------------------------ */

/* 1. COUNTDOWNS --------------------------------------------------
   All times Eastern (Manchester CT). Edit the dates here.
   - Family: July 2, 2026, 6:00 PM (pulling out of 26 Hampton Dr)
   - Lola & Grandpa: June 25, 2026, 7:15 AM */
const TIMERS = [
  { id: 'countdown',      date: new Date('2026-07-02T18:00:00-04:00'), done: "We're here. Welcome home." },
  { id: 'countdown-lola', date: new Date('2026-06-25T07:15:00-04:00'), done: "Wheels up — see you in Arizona!" },
];

function renderCountdown(el, target, doneMsg) {
  const diff = target - new Date();
  if (diff <= 0) { el.innerHTML = '<div class="cd-done">' + doneMsg + '</div>'; return; }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  const unit = (n, l) => `<div class="cd-unit"><div class="cd-num">${n}</div><div class="cd-lbl">${l}</div></div>`;
  el.innerHTML = unit(d, 'days') + unit(h, 'hours') + unit(m, 'min') + unit(s, 'sec');
}

function tickCountdown() {
  TIMERS.forEach(t => { const el = document.getElementById(t.id); if (el) renderCountdown(el, t.date, t.done); });
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

/* 3b. HAMBURGER DRAWER (mobile nav) ------------------------------- */
(function () {
  const nav = document.querySelector('.nav');
  const btn = document.querySelector('.nav-toggle');
  if (!nav || !btn) return;
  const toggle = (open) => {
    const isOpen = open ?? !nav.classList.contains('open');
    nav.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);   // CSS morphs the bars to an X
  };
  btn.addEventListener('click', () => toggle());
  nav.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => toggle(false)));
})();

/* 3c. CARD IMAGE GALLERIES (swipe + arrows + dots) ---------------- */
document.querySelectorAll('.gallery').forEach(g => {
  const slides = g.querySelector('.slides');
  if (!slides) return;
  const imgs = slides.querySelectorAll('img');
  if (imgs.length < 2) return;
  const dots = g.querySelector('.gdots');
  imgs.forEach((_, i) => {
    const b = document.createElement('b');
    if (i === 0) b.className = 'on';
    b.style.pointerEvents = 'auto';
    b.addEventListener('click', () => slides.scrollTo({ left: slides.clientWidth * i, behavior: 'smooth' }));
    dots && dots.appendChild(b);
  });
  const prev = g.querySelector('.gprev'), next = g.querySelector('.gnext');
  prev && prev.addEventListener('click', () => slides.scrollBy({ left: -slides.clientWidth, behavior: 'smooth' }));
  next && next.addEventListener('click', () => slides.scrollBy({ left: slides.clientWidth, behavior: 'smooth' }));
  let t;
  slides.addEventListener('scroll', () => {
    clearTimeout(t);
    t = setTimeout(() => {
      const idx = Math.round(slides.scrollLeft / slides.clientWidth);
      dots && dots.querySelectorAll('b').forEach((b, i) => b.classList.toggle('on', i === idx));
    }, 80);
  }, { passive: true });
});

/* 4. SERVICE WORKER (installable + offline) ----------------------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
