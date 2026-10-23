'use strict';
// No trackers, cookies, storage, dependencies or background form submissions.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
function closeMenu(returnFocus = false) {
  if (!toggle || !nav) return;
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  if (returnFocus) toggle.focus();
}
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(expanded));
    nav.classList.toggle('is-open', expanded);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  window.matchMedia('(min-width: 1001px)').addEventListener('change', () => closeMenu());
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
const form = document.querySelector('#enquiry-form');
if (form) {
  const interest = form.elements.interest;
  const preset = new URLSearchParams(window.location.search).get('interest');
  if ([...interest.options].some(option => option.value === preset)) interest.value = preset;
  const result = document.querySelector('#form-result');
  const status = document.querySelector('#form-status');
  form.addEventListener('input', () => { result.hidden = true; status.textContent = ''; });
  form.addEventListener('change', () => { result.hidden = true; status.textContent = ''; });
  form.addEventListener('submit', event => {
    event.preventDefault();
    for (const field of [form.elements.name, form.elements.message]) {
      field.setCustomValidity(field.value.trim() ? '' : 'Please enter a value, not just spaces.');
      field.addEventListener('input', () => field.setCustomValidity(''), {once: true});
    }
    if (!form.reportValidity()) return;
    const name = form.elements.name.value.trim();
    const company = form.elements.company.value.trim();
    const overview = form.elements.message.value.trim();
    const message = ['Hello Ziyabo,', '', `Name: ${name}`, ...(company ? [`Company: ${company}`] : []), `Interested in: ${interest.value}`, '', 'Project overview:', overview].join('\n');
    document.querySelector('#message-preview').textContent = message;
    document.querySelector('#whatsapp-link').href = `https://wa.me/918129905061?text=${encodeURIComponent(message)}`;
    const recipient = interest.value === 'GymBinary' ? 'contact@gymbinary.com' : 'contact@ziyabo.com';
    const subject = `Website enquiry — ${interest.value}`;
    document.querySelector('#email-link').href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    document.querySelector('#delivery-note').textContent = `Nothing has been sent yet. Email opens a draft to ${recipient}. Review the draft or WhatsApp message and press Send.`;
    result.hidden = false;
    status.textContent = 'Your message is ready to review. Nothing has been sent.';
    document.querySelector('#result-title').focus();
  });
}

// Native disclosure menus work with keyboard, pointer and without JavaScript.
const disclosures = [...document.querySelectorAll('.nav-disclosure')];
function closeDisclosures(except = null) {
  disclosures.forEach(item => { if (item !== except) item.open = false; });
}
disclosures.forEach(item => {
  item.addEventListener('toggle', () => { if (item.open) closeDisclosures(item); });
  item.addEventListener('keydown', event => {
    if (event.key === 'Escape' && item.open) {
      event.stopPropagation();
      item.open = false;
      item.querySelector('summary').focus();
    }
  });
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-disclosure')) closeDisclosures();
});
window.matchMedia('(min-width: 1001px)').addEventListener('change', () => closeDisclosures());

// Capability explorer: tab panels remain readable when JavaScript is unavailable.
document.querySelectorAll('[data-tabs]').forEach(explorer => {
  const tabs = [...explorer.querySelectorAll('[role="tab"]')];
  function activate(index, focus = false) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = i !== index;
    });
    if (focus) tabs[index].focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(index));
    tab.addEventListener('keydown', event => {
      const actions = {ArrowRight:(index+1)%tabs.length, ArrowLeft:(index-1+tabs.length)%tabs.length, Home:0, End:tabs.length-1};
      if (Object.hasOwn(actions, event.key)) {
        event.preventDefault();
        activate(actions[event.key], true);
      }
    });
  });
  activate(0);
});
