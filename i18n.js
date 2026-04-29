const I18N = {
  en: {
    'nav.home':     'Home',
    'nav.projects': 'Projects',
    'nav.cv':       'CV',
    'nav.contact':  'Contact Me',
    'nav.status':   'Building something',

    'hero.eyebrow':      'Portfolio',
    'hero.headline':     'Data<br><em>Analyst</em><br>& <em>Analytics</em><br>Engineering',
    'hero.description':  'Analytics infrastructure, data visualization, and workflow automation. Turning fragmented business data into decisions that stick.',
    'hero.cta':          'Get in touch',
    'hero.location':     'Curitiba, Brazil<br>Open to remote',

    'section.projects.eyebrow': '02 — Featured Projects',
    'section.projects.title':   'Selected <em>work</em>',
    'section.projects.viewAll': 'View all projects',
    'section.about.eyebrow':    '03 — About',
    'section.about.title':      'Who <em>I am</em>',
    'section.contact.eyebrow':  '05 — Contact',
    'section.contact.title':    "Let's <em>talk</em>",

    'placeholder.about':   'A short take on my background, how I think about data, and what drives me — concise enough to read, specific enough to matter.',
    'placeholder.contact': 'Contact form and links to LinkedIn, GitHub, and other networks.',

    'projects.eyebrow': 'Projects',
    'projects.title':   'All <em>work</em>',
    'filter.type': 'Type',
    'filter.tool': 'Tool',
    'filter.all':  'All',

    'project.viewCaseStudy': 'View case study →',
    'project.openApp':       'Open app →',

    'project.saneamento-brasil.title': "Brazil's Sanitation Divide",
    'project.saneamento-brasil.desc':  'Interactive data visualization exploring sanitation infrastructure disparities across Brazilian municipalities.',
  },

  pt: {
    'nav.home':     'Início',
    'nav.projects': 'Projetos',
    'nav.cv':       'CV',
    'nav.contact':  'Fale Comigo',
    'nav.status':   'Construindo algo',

    'hero.eyebrow':      'Portfólio',
    'hero.headline':     'Analista de<br><em>Dados</em><br>& <em>Analytics</em><br>Engineering',
    'hero.description':  'Infraestrutura de analytics, visualização de dados e automação de processos. Transformando dados fragmentados em decisões que funcionam.',
    'hero.cta':          'Entre em contato',
    'hero.location':     'Curitiba, Brasil<br>Aberto a remoto',

    'section.projects.eyebrow': '02 — Projetos em Destaque',
    'section.projects.title':   'Trabalhos <em>selecionados</em>',
    'section.projects.viewAll': 'Ver todos os projetos',
    'section.about.eyebrow':    '03 — Sobre',
    'section.about.title':      'Quem <em>sou eu</em>',
    'section.contact.eyebrow':  '05 — Contato',
    'section.contact.title':    'Vamos <em>conversar</em>',

    'placeholder.about':   'Um pouco sobre minha trajetória, como penso sobre dados e o que me move — conciso o suficiente para ler, específico o suficiente para importar.',
    'placeholder.contact': 'Formulário de contato e links para LinkedIn, GitHub e outras redes.',

    'projects.eyebrow': 'Projetos',
    'projects.title':   'Todos os <em>trabalhos</em>',
    'filter.type': 'Tipo',
    'filter.tool': 'Ferramenta',
    'filter.all':  'Todos',

    'project.viewCaseStudy': 'Ver case study →',
    'project.openApp':       'Abrir app →',

    'project.saneamento-brasil.title': 'O Brasil que tem saneamento e o Brasil que não tem',
    'project.saneamento-brasil.desc':  'Visualização de dados interativa sobre as disparidades de saneamento básico entre os municípios brasileiros.',
  }
};

(function () {
  function detectLang() {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'pt') return saved;
    return (navigator.language || 'en').toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }

  function applyTranslations(lang) {
    const dict = I18N[lang] || I18N.en;

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = dict[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = dict[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });

    const toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.textContent = lang === 'pt' ? 'EN' : 'PT';
  }

  const lang = detectLang();

  window.i18n = {
    lang,
    t(key) {
      return (I18N[this.lang] || I18N.en)[key] || key;
    },
    apply() {
      applyTranslations(this.lang);
    },
    toggle() {
      this.lang = this.lang === 'en' ? 'pt' : 'en';
      localStorage.setItem('lang', this.lang);
      applyTranslations(this.lang);
      if (typeof window._reloadProjectLoader === 'function') {
        window._reloadProjectLoader();
      }
      if (typeof window._reloadHomeLoader === 'function') {
        window._reloadHomeLoader();
      }
    }
  };

  document.addEventListener('DOMContentLoaded', () => applyTranslations(lang));
})();
