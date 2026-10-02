const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');
const langToggle = document.querySelector('[data-lang-toggle]');
const pageName = document.body.dataset.page || 'home';

const getSavedLang = () => localStorage.getItem('iml-language') || 'vi';

const readPath = (obj, path) => path.split('.').reduce((value, key) => value?.[key], obj);

const CHEMICAL_FORMULAS = /\b(?:MnFe2O4|Fe3O4|Fe2O3|La2O3|CeO2|BiVO4|BiTaO4|BiFeO3|TiO2|SiO2|Al2O3|C3N4|CO2|H2O)\b/g;
const CHEMICAL_IONS = /\b(Fe|Ce|La|Mn|Cu|Zn|Pb|Cd|As)(\d+)([+-])(?!\w)/g;
const formatScientificText = (text = '') => String(text)
  .replace(CHEMICAL_FORMULAS, (formula) => formula.replace(/(\d+)/g, '<sub>$1</sub>'))
  .replace(CHEMICAL_IONS, '$1<sup>$2$3</sup>');

function renderList(container, key, lang) {
  const data = siteContent[lang];
  const items = data[key];
  if (key === 'researchItems') {
    container.className = 'card-grid';
    container.innerHTML = items.map((item, index) => {
      const card = Array.isArray(item) ? { title: item[0], text: item[1] } : item;
      const url = card.url && !window.location.pathname.includes('/pages/') ? `pages/${card.url}` : card.url;
      const label = lang === 'vi' ? 'Xem chi tiết' : 'View details';
      const link = url ? `<a class="card-link" href="${url}">${label}</a>` : '';
      return `
      <article class="research-card reveal delay-${index % 4}">
        <span class="card-index">${String(index + 1).padStart(2, '0')}</span>
        <h3>${formatScientificText(card.title)}</h3><p>${formatScientificText(card.text)}</p>${link}
      </article>`;
    }).join('');
  }
  if (key === 'capabilities') {
    container.className = 'capability-list reveal delay-1';
    container.innerHTML = items.map(([title, text]) => `<div class="capability-item"><strong>${formatScientificText(title)}</strong><span>${formatScientificText(text)}</span></div>`).join('');
  }
  if (key === 'researchDetail') {
    const topic = new URLSearchParams(window.location.search).get('topic') || 'rare-earths';
    const detail = data.researchDetails?.[topic] || data.researchDetails?.['rare-earths'];
    container.className = 'research-detail';
    const labels = lang === 'vi'
      ? { back: '← Hướng nghiên cứu', studies: 'Nội dung nghiên cứu', outputs: 'Công bố và kết quả tiêu biểu' }
      : { back: '← Research', studies: 'Specific studies', outputs: 'Selected outputs' };
    container.innerHTML = `<a class="back-link" href="research.html">${labels.back}</a><h2>${formatScientificText(detail.title)}</h2><p class="lead">${formatScientificText(detail.lead)}</p><div class="detail-columns"><section><h3>${labels.studies}</h3><ul>${detail.studies.map((item) => `<li>${formatScientificText(item)}</li>`).join('')}</ul></section><section><h3>${labels.outputs}</h3><ul>${detail.outputs.map((item) => `<li>${formatScientificText(item)}</li>`).join('')}</ul></section></div>`;
  }
  if (key === 'peopleList') {
    container.className = 'people-sections';
    const renderPerson = (item) => {
      const person = Array.isArray(item) ? { name: item[0], role: item[1], focus: item[2] } : item;
      const initials = person.name.trim().split(/\s+/).slice(-2).map((part) => part[0]).join('');
      const links = (person.links || []).map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join('');
      const avatar = person.photo ? `<img class="avatar-photo" src="${person.photo}" alt="${person.name}" />` : `<div class="avatar">${initials}</div>`;
      return `<article class="person reveal">${avatar}<h3>${person.name}</h3><p class="person-role">${person.role}</p>${person.employment ? `<span class="employment-badge">${person.employment}</span>` : ''}${person.affiliation ? `<p class="person-affiliation">${person.affiliation}</p>` : ''}${person.focus ? `<p class="person-focus">${formatScientificText(person.focus)}</p>` : ''}${person.email ? `<a class="person-email" href="mailto:${person.email}">${person.email}</a>` : ''}<div class="profile-links">${links}</div></article>`;
    };
    container.innerHTML = items.map((group) => {
      if (!group.members) return renderPerson(group);
      return `<section class="people-section reveal"><div class="people-section-heading"><span>${group.section}</span></div><div class="people-grid page-grid">${group.members.map(renderPerson).join('')}</div></section>`;
    }).join('');
  }

  if (key === 'publicationList') {
    container.className = 'publication-list';
    const sortedItems = [];
    let group = [];
    const flushGroup = () => {
      sortedItems.push(...group.sort((a, b) => Number(b.year || 0) - Number(a.year || 0)));
      group = [];
    };
    items.forEach((item) => {
      if (item.type === 'section') {
        flushGroup();
        sortedItems.push(item);
      } else {
        group.push(item);
      }
    });
    flushGroup();
    container.innerHTML = sortedItems.map((item) => {
      if (item.type === 'section') return `<div class="publication-section-title reveal">${item.title}</div>`;
      const formattedTitle = formatScientificText(item.title);
      const title = item.url ? `<a href="${item.url}" target="_blank" rel="noreferrer">${formattedTitle}</a>` : formattedTitle;
      return `<article class="reveal ${item.type === 'patent' ? 'patent-item' : ''}"><span>${item.year}</span><h3>${title}</h3><p>${formatScientificText(item.meta)}</p></article>`;
    }).join('');
  }
  if (key === 'activitiesList') {
    container.className = 'activity-grid page-grid';
    container.innerHTML = items.map(([tag, title, text], index) => `<article class="activity-card reveal"><img src="../assets/${index === 1 ? 'environment-catalysis' : 'rare-earth-catalyst'}.svg" alt="${title}" /><span>${tag}</span><h3>${formatScientificText(title)}</h3><p>${formatScientificText(text)}</p></article>`).join('');
  }
  if (key === 'contact') {
    container.className = 'contact-page';
    const head = data.contact.head;
    const headLinks = (head.links || []).map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join('');
    const labels = lang === 'vi'
      ? { office: 'Phòng làm việc', phone: 'Điện thoại', email: 'Email', address: 'Địa chỉ', hours: 'Giờ làm việc' }
      : { office: 'Office', phone: 'Phone', email: 'Email', address: 'Address', hours: 'Hours' };
    container.innerHTML = `<div class="contact-card reveal"><h2>${data.contact.title}</h2><p>${data.contact.lead}</p><a class="btn primary" href="mailto:${data.contact.email}">${data.contact.email}</a></div><div class="contact-details reveal"><p><strong>${head.title}</strong><br>${head.name}</p><p><strong>${labels.office}</strong><br>${head.office}</p><p><strong>${labels.phone}</strong><br><a href="tel:${head.phone}">${head.phone}</a></p><p><strong>${labels.email}</strong><br><a href="mailto:${head.email}">${head.email}</a></p><div class="profile-links">${headLinks}</div><p><strong>${labels.address}</strong><br>${data.contact.address}</p><a class="map-link" href="${data.contact.mapsUrl}" target="_blank" rel="noreferrer">${data.contact.mapsLabel}</a><p><strong>${labels.hours}</strong><br>${data.contact.hours}</p></div>`;
  }
}

function applyLanguage(lang) {
  const data = siteContent[lang];
  document.documentElement.lang = lang;
  localStorage.setItem('iml-language', lang);
  langToggle.textContent = lang === 'vi' ? '🇺🇸 EN' : '🇻🇳 VI';
  langToggle.setAttribute('aria-label', lang === 'vi' ? 'Chuyển sang tiếng Anh' : 'Switch to Vietnamese');
  const menuOpen = nav.classList.contains('is-open');
  navToggle.setAttribute('aria-label', menuOpen ? (lang === 'vi' ? 'Đóng trình đơn' : 'Close navigation') : (lang === 'vi' ? 'Mở trình đơn' : 'Open navigation'));
  const brand = document.querySelector('.brand');
  if (brand) brand.setAttribute('aria-label', lang === 'vi' ? 'Trang chủ Phòng Vật liệu Vô cơ' : 'Inorganic Materials Laboratory home');
  const heroArt = document.querySelector('.hero-art');
  if (heroArt) {
    heroArt.src = lang === 'vi' ? 'assets/research-fields.svg?v=3' : 'assets/research-fields-en.svg?v=3';
    document.querySelector('[data-hero-mobile]').srcset = lang === 'vi' ? 'assets/research-fields-mobile.svg?v=3' : 'assets/research-fields-en-mobile.svg?v=3';
    heroArt.alt = lang === 'vi' ? 'Sơ đồ năm hướng nghiên cứu của Phòng Vật liệu Vô cơ' : 'Five research directions of the Inorganic Materials Laboratory';
  }
  const pageTitles = { home: data.nav.home, research: data.nav.research, people: data.nav.people, publications: data.nav.publications, activities: data.nav.activities, contact: data.nav.contact, 'research-detail': data.research.title };
  document.title = `${pageTitles[document.body.dataset.page] || data.common.labName} | ${data.common.labName}`;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.innerHTML = formatScientificText(readPath(data, element.dataset.i18n) || '');
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
  const vi = getSavedLang() === 'vi';
  navToggle.setAttribute('aria-label', isOpen ? (vi ? 'Đóng trình đơn' : 'Close navigation') : (vi ? 'Mở trình đơn' : 'Open navigation'));
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')));
langToggle.addEventListener('click', () => applyLanguage(getSavedLang() === 'vi' ? 'en' : 'vi'));

applyLanguage(getSavedLang());
