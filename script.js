const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');
const langToggle = document.querySelector('[data-lang-toggle]');
const pageName = document.body.dataset.page || 'home';

const getSavedLang = () => localStorage.getItem('iml-language') || 'vi';

const readPath = (obj, path) => path.split('.').reduce((value, key) => value?.[key], obj);

function renderList(container, key, lang) {
  const data = siteContent[lang];
  const items = data[key];
  if (key === 'researchItems') {
    container.className = 'card-grid';
    container.innerHTML = items.map(([title, text], index) => `
      <article class="research-card reveal delay-${index % 4}">
        <span class="card-index">${String(index + 1).padStart(2, '0')}</span>
        <h3>${title}</h3><p>${text}</p>
      </article>`).join('');
  }
  if (key === 'capabilities') {
    container.className = 'capability-list reveal delay-1';
    container.innerHTML = items.map(([title, text]) => `<div class="capability-item"><strong>${title}</strong><span>${text}</span></div>`).join('');
  }
  if (key === 'peopleList') {
    container.className = 'people-sections';
    const renderPerson = (item) => {
      const person = Array.isArray(item) ? { name: item[0], role: item[1], focus: item[2] } : item;
      const initials = person.name.split(' ').map((part) => part[0]).join('').slice(0, 2);
      const links = (person.links || []).map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join('');
      const avatar = person.photo ? `<img class="avatar-photo" src="${person.photo}" alt="${person.name}" />` : `<div class="avatar">${initials}</div>`;
      return `<article class="person reveal">${avatar}<h3>${person.name}</h3><p class="person-role">${person.role}</p><p>${person.focus}</p>${person.email ? `<a class="person-email" href="mailto:${person.email}">${person.email}</a>` : ''}<div class="profile-links">${links}</div></article>`;
    };
    container.innerHTML = items.map((group) => {
      if (!group.members) return renderPerson(group);
      return `<section class="people-section reveal"><div class="people-section-heading"><span>${group.section}</span></div><div class="people-grid page-grid">${group.members.map(renderPerson).join('')}</div></section>`;
    }).join('');
  }

  if (key === 'publicationList') {
    container.className = 'publication-list';
    container.innerHTML = items.map(([year, title, meta]) => `<article class="reveal"><span>${year}</span><h3>${title}</h3><p>${meta}</p></article>`).join('');
  }
  if (key === 'activitiesList') {
    container.className = 'activity-grid page-grid';
    container.innerHTML = items.map(([tag, title, text], index) => `<article class="activity-card reveal"><img src="../assets/${index === 1 ? 'environment-catalysis' : 'rare-earth-catalyst'}.svg" alt="${title}" /><span>${tag}</span><h3>${title}</h3><p>${text}</p></article>`).join('');
  }
  if (key === 'contact') {
    container.className = 'contact-page';
    const head = data.contact.head;
    const headLinks = (head.links || []).map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join('');
    container.innerHTML = `<div class="contact-card reveal"><h2>${data.contact.title}</h2><p>${data.contact.lead}</p><a class="btn primary" href="mailto:${data.contact.email}">${data.contact.email}</a></div><div class="contact-details reveal"><p><strong>${head.title}</strong><br>${head.name}</p><p><strong>Office</strong><br>${head.office}</p><p><strong>Phone</strong><br><a href="tel:${head.phone}">${head.phone}</a></p><p><strong>Email</strong><br><a href="mailto:${head.email}">${head.email}</a></p><div class="profile-links">${headLinks}</div><p><strong>Address</strong><br>${data.contact.address}</p><a class="map-link" href="${data.contact.mapsUrl}" target="_blank" rel="noreferrer">${data.contact.mapsLabel}</a><p><strong>Hours</strong><br>${data.contact.hours}</p></div>`;
  }
}

function applyLanguage(lang) {
  const data = siteContent[lang];
  document.documentElement.lang = lang;
  localStorage.setItem('iml-language', lang);
  langToggle.textContent = lang === 'vi' ? 'EN' : 'VI';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = readPath(data, element.dataset.i18n) || '';
  });
  document.querySelectorAll('[data-render]').forEach((container) => renderList(container, container.dataset.render, lang));
  revealElements();
}

function revealElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

const setHeaderState = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')));
langToggle.addEventListener('click', () => applyLanguage(getSavedLang() === 'vi' ? 'en' : 'vi'));

applyLanguage(getSavedLang());
