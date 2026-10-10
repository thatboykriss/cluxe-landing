const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

function openEmail({ name = '', email = '', need = '', message = '', location = '' }) {
  const subject = encodeURIComponent(`CLUXE property enquiry — ${need || 'General enquiry'}`);
  const body = encodeURIComponent(
    `Hello CLUXE Properties & Homes,\n\nI'd like to make an enquiry.\n\nName: ${name}\nEmail: ${email}\nInterest: ${need}\nPreferred location: ${location}\nDetails: ${message || 'Not provided'}\n\nThank you.`
  );
  window.location.href = `mailto:cluxeproperties@gmail.com?subject=${subject}&body=${body}`;
}

document.getElementById('quickSearch')?.addEventListener('submit', event => {
  event.preventDefault();
  openEmail({ need: document.getElementById('interest').value, location: document.getElementById('location').value });
});

document.getElementById('contactForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  openEmail({ name: form.get('name'), email: form.get('email'), need: form.get('need'), message: form.get('message') });
});

// The floating contact shortcut scrolls to the enquiry form. Add a WhatsApp Business number here when confirmed.
