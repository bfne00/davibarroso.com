const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const _t = key => (window.i18n ? window.i18n.t(key) : key);

const links = [
  { key: 'nav.home',     href: 'index.html' },
  { key: 'nav.projects', href: 'projects.html' },
  { key: 'nav.cv',       href: '#cv' },
  { key: 'nav.contact',  href: 'index.html#contact' },
];

const navHTML = `
  <header>
    <a href="index.html" class="logo">Davi B. Barroso</a>
    <nav class="nav">
      ${links.map(l => `
        <a href="${l.href}" class="nav-link${l.href === currentPage ? ' nav-link--active' : ''}">${_t(l.key)}</a>
      `).join('')}
    </nav>
    <div class="header-right">
      <button id="lang-toggle" class="lang-toggle" onclick="window.i18n && window.i18n.toggle()">${window.i18n ? (window.i18n.lang === 'pt' ? 'EN' : 'PT') : 'PT'}</button>
      <div class="status-pill">
        <span class="dot"></span>
        <span data-i18n="nav.status">${_t('nav.status')}</span>
      </div>
    </div>
  </header>
`;

document.currentScript.insertAdjacentHTML('afterend', navHTML);
