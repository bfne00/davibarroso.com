/**
 * project-loader.js
 * Replaces the static project grid in projects.html with cards
 * generated from projects/index.json.
 *
 * TO REMOVE: delete this file and the <script> tag in projects.html.
 * The hardcoded cards will reappear automatically.
 */

(async function () {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;

  let projects;
  try {
    const res = await fetch('projects/index.json');
    projects = await res.json();
  } catch (e) {
    console.warn('project-loader: could not load projects/index.json', e);
    return; // fall back to static HTML
  }

  // ── Render cards ──────────────────────────────────────────────
  function renderCard(p) {
    const tags = [p.type, ...p.tools]
      .map(t => `<span class="project-tag">${t}</span>`)
      .join('');

    const metrics = (p.metrics || [])
      .map(m => `
        <div class="metric">
          <span class="metric-value">${m.value}</span>
          <span class="metric-label">${m.label}</span>
        </div>`)
      .join('');

    return `
      <article class="project-card-grid"
               data-type="${p.type}"
               data-tools="${p.tools.join(',')}">
        <div class="project-card-top" style="background:${p.color}">
          <span class="project-placeholder-img">[ ${p.type.toLowerCase()} ]</span>
        </div>
        <div class="project-card-body">
          <div class="project-meta">${tags}</div>
          <h2 class="project-name">${p.title}</h2>
          <p class="project-desc">${p.description}</p>
          ${metrics ? `<div class="project-metrics">${metrics}</div>` : ''}
          <a href="project.html?slug=${p.slug}" class="project-link">View case study →</a>
        </div>
      </article>`;
  }

  grid.innerHTML = projects.map(renderCard).join('');

  // ── Wire up filter bar ────────────────────────────────────────
  const cards = () => Array.from(grid.querySelectorAll('.project-card-grid'));

  let activeType = 'All';
  let activeTool = null;

  function applyFilters() {
    cards().forEach(card => {
      const matchType = activeType === 'All' || card.dataset.type === activeType;
      const matchTool = !activeTool ||
        card.dataset.tools.split(',').includes(activeTool);
      card.style.display = matchType && matchTool ? '' : 'none';
    });
  }

  document.querySelectorAll('.filter-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.filter-group')
                       .querySelector('.filter-label')
                       .textContent.trim();

      // deactivate siblings
      btn.closest('.filter-tags')
         .querySelectorAll('.filter-tag')
         .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (group === 'Type') activeType = btn.textContent.trim();
      if (group === 'Tool') activeTool = btn.classList.contains('active')
        ? btn.textContent.trim() : null;

      applyFilters();
    });
  });
})();
