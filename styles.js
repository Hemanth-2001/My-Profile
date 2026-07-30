// Small interactions: copy email to clipboard when clicking email link label (also triggers mailto)
document.addEventListener('DOMContentLoaded', () => {
  const copy = document.getElementById('copy-email');
  if (!copy) return;
  copy.addEventListener('click', (e) => {
    // If user clicked while holding Ctrl/Meta they likely want mail client — allow default
    if (e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    const email = copy.getAttribute('href')?.replace('mailto:', '') || '';
    if (!email) return window.location = copy.href;
    navigator.clipboard?.writeText(email).then(() => {
      // brief visual feedback
      const orig = copy.textContent;
      copy.textContent = 'Email copied — click to open';
      setTimeout(() => copy.textContent = orig, 2200);
      // open mail client after small delay
      setTimeout(() => window.location = `mailto:${email}`, 1200);
    }).catch(() => {
      window.location = `mailto:${email}`;
    });
  });
});
