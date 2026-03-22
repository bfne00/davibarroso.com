const dotCells = Array(20).fill('<span class="dot-cell"></span>').join('');

const animationHTML = `
  <div class="hero-animation" aria-hidden="true">

    <div class="scene-grid"></div>

    <span class="scene-snippet sn-1">SELECT id, amount</span>
    <span class="scene-snippet sn-2">{{ ref('stg_orders') }}</span>
    <span class="scene-snippet sn-3">cron: "0 8 * * 1"</span>
    <span class="scene-snippet sn-4">CALCULATE([Revenue])</span>
    <span class="scene-snippet sn-5">GROUP BY region</span>
    <span class="scene-snippet sn-6">color: var(--accent)</span>
    <div class="scene-callout callout-left">
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="4.5" width="7" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/>
        <rect x="10.5" y="0.5" width="7" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/>
        <rect x="10.5" y="8.5" width="7" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/>
        <rect x="20.5" y="4.5" width="7" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/>
        <line x1="7.5" y1="7" x2="10.5" y2="3" stroke="currentColor" stroke-width="1.2"/>
        <line x1="7.5" y1="7" x2="10.5" y2="11" stroke="currentColor" stroke-width="1.2"/>
        <line x1="17.5" y1="3" x2="20.5" y2="7" stroke="currentColor" stroke-width="1.2"/>
        <line x1="17.5" y1="11" x2="20.5" y2="7" stroke="currentColor" stroke-width="1.2"/>
      </svg>
      <span>Pipeline Design</span>
    </div>

    <div class="scene-callout callout-right">
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="10" r="3" stroke="currentColor" stroke-width="1.2"/>
        <circle cx="14" cy="4" r="3" stroke="currentColor" stroke-width="1.2"/>
        <circle cx="14" cy="16" r="3" stroke="currentColor" stroke-width="1.2"/>
        <circle cx="24" cy="10" r="3" stroke="currentColor" stroke-width="1.2"/>
        <line x1="7" y1="10" x2="11" y2="5" stroke="currentColor" stroke-width="1.2"/>
        <line x1="7" y1="10" x2="11" y2="15" stroke="currentColor" stroke-width="1.2"/>
        <line x1="17" y1="5" x2="21" y2="10" stroke="currentColor" stroke-width="1.2"/>
        <line x1="17" y1="15" x2="21" y2="10" stroke="currentColor" stroke-width="1.2"/>
      </svg>
      <span>User Experience Flow</span>
    </div>

    <div class="iso-scene">

      <div class="iso-layer" data-layer="collect">
        <span class="layer-label">Collect</span>
        <div class="dot-grid">${dotCells}</div>
      </div>

      <div class="iso-layer" data-layer="transform">
        <span class="layer-label">Transform</span>
        <div class="code-content">
          <div class="code-line" style="--w:68%"></div>
          <div class="code-line" style="--w:50%"></div>
          <div class="code-line" style="--w:82%"></div>
          <div class="code-line" style="--w:38%"></div>
          <div class="code-line" style="--w:60%"></div>
        </div>
      </div>

      <div class="iso-layer" data-layer="automate">
        <span class="layer-label">Automate</span>
        <svg class="flow-svg" viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28"  cy="45" r="10" class="flow-node"/>
          <circle cx="100" cy="18" r="10" class="flow-node"/>
          <circle cx="100" cy="72" r="10" class="flow-node"/>
          <circle cx="172" cy="45" r="10" class="flow-node"/>
          <line x1="38"  y1="45" x2="90"  y2="22" class="flow-edge"/>
          <line x1="38"  y1="45" x2="90"  y2="68" class="flow-edge"/>
          <line x1="110" y1="22" x2="162" y2="42" class="flow-edge"/>
          <line x1="110" y1="68" x2="162" y2="48" class="flow-edge"/>
        </svg>
      </div>

      <div class="iso-layer" data-layer="visualize">
        <span class="layer-label">Visualize</span>
        <div class="bar-chart">
          <div class="bar" style="--h:55%"></div>
          <div class="bar" style="--h:80%"></div>
          <div class="bar" style="--h:40%"></div>
          <div class="bar" style="--h:95%"></div>
          <div class="bar" style="--h:60%"></div>
          <div class="bar" style="--h:72%"></div>
          <div class="bar" style="--h:50%"></div>
        </div>
      </div>

    </div>
  </div>
`;

document.currentScript.insertAdjacentHTML('afterend', animationHTML);
