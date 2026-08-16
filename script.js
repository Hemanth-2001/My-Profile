// Hemanth Kumar Nalla — profile interactions
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Navbar scroll state ---------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach((link) =>
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* ---------- Copy email on click (also opens mail client) ---------- */
  const copyEl = document.getElementById('copy-email');
  if (copyEl) {
    copyEl.addEventListener('click', (e) => {
      if (e.ctrlKey || e.metaKey) return; // let the user open their mail client
      e.preventDefault();
      const email = 'hemanthnalla3@gmail.com';
      const orig = copyEl.innerHTML;
      const flash = () => {
        copyEl.classList.add('copied');
        copyEl.querySelector('svg').outerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
        const label = copyEl.childNodes[copyEl.childNodes.length - 1];
        if (label && label.nodeType === Node.TEXT_NODE) label.textContent = ' Copied!';
        setTimeout(() => { copyEl.classList.remove('copied'); copyEl.innerHTML = orig; }, 2200);
      };
      navigator.clipboard?.writeText(email).then(flash).catch(flash);
    });
  }

  /* ---------- Resume modal ---------- */
  const modal = document.getElementById('resume-modal');
  if (modal) {
    const openBtns = document.querySelectorAll('[data-resume-open]');
    const close = () => {
      modal.hidden = true;
      document.body.classList.remove('modal-open');
      document.querySelector('[data-resume-open]')?.focus();
    };
    openBtns.forEach((btn) =>
      btn.addEventListener('click', () => {
        modal.hidden = false;
        document.body.classList.add('modal-open');
        modal.querySelector('.modal-close')?.focus();
      })
    );
    modal.querySelectorAll('[data-resume-close]').forEach((el) => el.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.hidden) close();
    });
  }

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in-view'));
  }
});
