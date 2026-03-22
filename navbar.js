const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const links = [
  { label: 'Home',         href: 'index.html' },
  { label: 'Projects',     href: 'projects.html' },
  { label: 'Book Rec.',    href: '#books' },
  { label: 'CV',           href: '#cv' },
  { label: 'Contact Me',   href: 'index.html#contact' },
];

const navHTML = `
  <header>
    <a href="index.html" class="logo">Davi B. Barroso</a>
    <nav class="nav">
      ${links.map(l => `
        <a href="${l.href}" class="nav-link${l.href === currentPage ? ' nav-link--active' : ''}">${l.label}</a>
      `).join('')}
    </nav>
    <div class="status-pill">
      <span class="dot"></span>
      Building something
    </div>
  </header>
`;

document.currentScript.insertAdjacentHTML('afterend', navHTML);
