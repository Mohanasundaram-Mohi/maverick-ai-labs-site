(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const target = new URL(a.href, location.href).pathname.split('/').pop();
    if (target === current) a.setAttribute('aria-current', 'page');
  });
  document.querySelectorAll('[data-contact-email]').forEach(el => {
    const email = window.MAVERICK_CONFIG?.contactEmail;
    if (email) { el.href = `mailto:${email}`; el.textContent = email; }
  });
  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const status = form.querySelector('[role="status"]');
      if (status) status.textContent = 'This demo form is not connected to a submission service. Your message has not been sent. Please configure a form provider or publish a monitored email address.';
    });
  });
})();
