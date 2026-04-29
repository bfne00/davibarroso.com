(async function () {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;

  let projects;
  try {
    const res = await fetch('projects/index.json');
    projects = await res.json();
  } catch (e) {
    console.warn('project-loader: could not load projects/index.json', e);
    return;
  }

  function renderThumb(p) {
    if (p.images && p.images.length > 0) {
      const slides = p.images
        .map((src, i) => `<div class="slide${i === 0 ? ' active' : ''}" style="background-image:url('${src}')"></div>`)
        .join('');
      return { cls: 'project-card-top slideshow', style: '', inner: slides };
    }
    if (p.image) {
      return {
        cls: 'project-card-top',
        style: `background: ${p.color}; background-image: url('${p.image}'); background-size: cover; background-position: center;`,
        inner: ''
      };
    }
    return {
      cls: 'project-card-top',
      style: `background: ${p.color};`,
      inner: `<span class="project-placeholder-img">[ ${p.type.toLowerCase()} ]</span>`
    };
  }

  function renderCard(p) {
    const lang = window.i18n ? window.i18n.lang : 'en';
    const title = (lang === 'pt' && p.title_pt) ? p.title_pt : p.title;
    const desc  = (lang === 'pt' && p.description_pt) ? p.description_pt : p.description;
    const viewKey = p.url ? 'project.openApp' : 'project.viewCaseStudy';
    const viewText = window.i18n ? window.i18n.t(viewKey) : (p.url ? 'Open app →' : 'View case study →');
    const href = p.url || `project.html?slug=${p.slug}`;
    const target = p.url ? ' target="_blank" rel="noopener"' : '';

    const thumb = renderThumb(p);

    const tags = [p.type, ...p.tools]
      .map(t => `<span class="project-tag">${t}</span>`)
      .join('');

    const metrics = (p.metrics || [])
      .map(m => {
        const label = (lang === 'pt' && m.label_pt) ? m.label_pt : m.label;
        return `
          <div class="metric">
            <span class="metric-value">${m.value}</span>
            <span class="metric-label">${label}</span>
          </div>`;
      })
      .join('');

    return `
      <article class="project-card-grid"
               data-type="${p.type}"
               data-tools="${p.tools.join(',')}">
        <div class="${thumb.cls}"${thumb.style ? ` style="${thumb.style}"` : ''}>${thumb.inner}</div>
        <div class="project-card-body">
          <div class="project-meta">${tags}</div>
          <h2 class="project-name">${title}</h2>
          <p class="project-desc">${desc}</p>
          ${metrics ? `<div class="project-metrics">${metrics}</div>` : ''}
          <a href="${href}"${target} class="project-link">${viewText}</a>
        </div>
      </article>`;
  }

  function initSlideshows(container) {
    container.querySelectorAll('.slideshow').forEach(el => {
      const slides = Array.from(el.querySelectorAll('.slide'));
      if (slides.length <= 1) return;
      let current = 0;
      setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
      }, 2500);
    });
  }

  function render() {
    grid.innerHTML = projects.map(renderCard).join('');
    initSlideshows(grid);
    wireFilters();
  }

  function wireFilters() {
    const cards = () => Array.from(grid.querySelectorAll('.project-card-grid'));
    let activeType = 'All';
    let activeTool = null;

    function applyFilters() {
      cards().forEach(card => {
        const matchType = activeType === 'All' || card.dataset.type === activeType;
        const matchTool = !activeTool || card.dataset.tools.split(',').includes(activeTool);
        card.style.display = matchType && matchTool ? '' : 'none';
      });
    }

    document.querySelectorAll('.filter-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.closest('.filter-group')
                         .querySelector('.filter-label')
                         .textContent.trim();

        btn.closest('.filter-tags')
           .querySelectorAll('.filter-tag')
           .forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (group === 'Type' || group === 'Tipo') activeType = btn.textContent.trim();
        if (group === 'Tool' || group === 'Ferramenta') {
          activeTool = btn.classList.contains('active') ? btn.textContent.trim() : null;
        }

        applyFilters();
      });
    });
  }

  render();
  window._reloadProjectLoader = render;
})();
