(async function () {
  const track = document.querySelector('.projects-track');
  if (!track) return;

  let projects;
  try {
    const res = await fetch('projects/index.json');
    projects = await res.json();
  } catch (e) {
    console.warn('home-loader: could not load projects/index.json', e);
    return;
  }

  const featured = projects.filter(p => p.featured);
  if (!featured.length) return;

  function renderThumb(p) {
    if (p.images && p.images.length > 0) {
      const slides = p.images
        .map((src, i) => `<div class="slide${i === 0 ? ' active' : ''}" style="background-image:url('${src}')"></div>`)
        .join('');
      return `<div class="project-card-top slideshow">${slides}</div>`;
    }
    if (p.image) {
      return `<div class="project-card-top" style="background:${p.color}; background-image:url('${p.image}'); background-size:cover; background-position:center;"></div>`;
    }
    return `<div class="project-card-top" style="background:${p.color};">
      <span class="project-placeholder-img">[ ${p.type.toLowerCase()} ]</span>
    </div>`;
  }

  function renderCard(p) {
    const lang = window.i18n ? window.i18n.lang : 'en';
    const title = (lang === 'pt' && p.title_pt) ? p.title_pt : p.title;
    const desc  = (lang === 'pt' && p.description_pt) ? p.description_pt : p.description;
    const viewKey = p.url ? 'project.openApp' : 'project.viewCaseStudy';
    const viewText = window.i18n ? window.i18n.t(viewKey) : (p.url ? 'Open app →' : 'View case study →');
    const href = p.url || `project.html?slug=${p.slug}`;
    const target = p.url ? ' target="_blank" rel="noopener"' : '';

    const tags = [p.type, ...p.tools]
      .map(t => `<span class="project-tag">${t}</span>`)
      .join('');

    const metrics = (p.metrics || [])
      .map(m => {
        const label = (lang === 'pt' && m.label_pt) ? m.label_pt : m.label;
        return `<div class="metric">
          <span class="metric-value">${m.value}</span>
          <span class="metric-label">${label}</span>
        </div>`;
      })
      .join('');

    return `
      <article class="project-card">
        ${renderThumb(p)}
        <div class="project-card-body">
          <div class="project-meta">${tags}</div>
          <h3 class="project-name">${title}</h3>
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
    track.innerHTML = featured.map(renderCard).join('');
    initSlideshows(track);
  }

  render();
  window._reloadHomeLoader = render;
})();
