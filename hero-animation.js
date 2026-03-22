const dotCells = Array(20).fill('<span class="dot-cell"></span>').join('');

const animationHTML = `
  <div class="hero-animation" aria-hidden="true">
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
