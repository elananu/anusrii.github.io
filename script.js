/* =====================================================
   EDIT YOUR CONTENT HERE (top of file). Logic is below.
   ===================================================== */

const ROLES = ['AI/ML systems', 'Flutter mobile apps', 'full-stack web products', 'data-driven platforms'];

const SKILLS = {
  'Languages': ['Python', 'Java', 'Dart', 'SQL', 'JavaScript'],
  'Full-stack & backend': ['FastAPI', 'Flask', 'React / Vite', 'REST APIs', 'Flutter', 'JWT Auth'],
  'AI / ML': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'YOLOv8', 'NLP', 'Computer Vision'],
  'Data & storage': ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'SQLAlchemy', 'Pandas', 'NumPy'],
  'Deploy & tools': ['Render', 'Vercel', 'Hugging Face Spaces', 'Git / GitHub', 'VS Code', 'Android Studio']
};

const EXPERIENCE = [
  { role: 'Software Development Intern', company: 'Zoho Corporation', loc: 'Madurai', date: 'Jan 2026 – Mar 2026',
    text: 'Built end-to-end features for the Murugan Pilgrim Guide App and Medicare App, from implementation and debugging through application delivery.' },
  { role: 'Flutter Development Intern', company: 'MarqwonDynamics', loc: 'Remote', date: 'May 2026 – Jun 2026',
    text: 'Worked on an agricultural price prediction platform, turning time-series data into forecasting features and application-ready insights.' },
  { role: 'Machine Learning Intern', company: 'Elysium Technologies Pvt. Ltd.', loc: 'Madurai', date: 'Feb 2025 – Mar 2025',
    text: 'Applied machine learning workflows covering preprocessing, feature engineering, model training and evaluation for a classification/prediction task.' }
];

const ALSO = [
  'AbserveTech: Flutter Dev Intern', 'TechnoHacks: Python Dev Intern',
  'CodSoft: Python Dev Intern', 'InternPe: Python Dev Intern'
];

// cat: 'ai' or 'mobile'.  Remove "demo" if a project has no live demo.
const PROJECTS = [
  { cat: 'ai', img: 'images/plantdisease.png', tag: 'Computer vision', title: 'Agri-AI', sub: 'AI-based crop disease detection',
    desc: 'Trained a YOLOv8 object detection model on the PlantDoc dataset across 29 disease classes to identify crop diseases from leaf images. Deployed via FastAPI with a React/Vite frontend and an AI-generated plain-language explanation layer.',
    stack: ['YOLOv8', 'FastAPI', 'React/Vite', 'Computer Vision'],
    code: 'https://github.com/elananu/agri-ai-project-complete', demo: 'https://agri-ai-project-complete.vercel.app/' },
  { cat: 'ai', img: 'images/fingaurdai.png', tag: 'Anomaly detection', title: 'FinGuard-AI', sub: 'Financial fraud detection & risk analytics',
    desc: 'An interactive transaction analysis platform where users upload financial datasets, visualize transaction statistics and risk patterns, and flag suspicious activity using ML-based anomaly detection.',
    stack: ['Python', 'Streamlit', 'Scikit-learn', 'Plotly'],
    code: 'https://github.com/elananu/FinGuard-AI', demo: 'https://elananu-finguard-ai-app-subabr.streamlit.app/' },
  { cat: 'ai', img: 'images/agriforecasting.png', tag: 'Forecasting', title: 'AgriPrice Forecasting', sub: 'Agricultural price prediction platform',
    desc: 'A full-stack forecasting application with a Recharts-based dashboard supporting forecast views, CSV upload and data export. Backend deployed on Hugging Face Spaces.',
    stack: ['FastAPI', 'React/Vite', 'Recharts', 'Hugging Face'],
    code: 'https://github.com/elananu/agriprice-forecasting', demo: 'https://agriprice-forecasting.vercel.app/' },
  { cat: 'ai', img: 'images/financialdatavisual.png', tag: 'Data visualization', title: 'Financial Data Visualization', sub: 'Financial charting & analysis tool',
    desc: 'Analyzed and visualized financial datasets using charts and graphs to support trend analysis and exploratory data analysis workflows.',
    stack: ['Python', 'Matplotlib', 'Data Analysis'],
    code: 'https://github.com/elananu/financial-visualization-project', demo: 'https://elananu-financial-visualization-project-app-wyt3ui.streamlit.app/' },
  { cat: 'ai', img: 'images/imagefusion.png', tag: 'Medical imaging', title: 'CT & MRI Image Fusion', sub: 'Multi-modal medical image fusion',
    desc: 'Built an image fusion system combining CT and MRI scans into a single composite image to support medical image analysis.',
    stack: ['Python', 'Deep Learning', 'Image Processing'],
    code: 'https://github.com/elananu/CT_MRI_Image_Fusion', demo: 'https://elananu-ct-mri-image-fusion-app-5qhud7.streamlit.app/' },
  { cat: 'ai', img: 'images/augmentation.png', tag: 'Deep learning', title: 'Image Augmentation (PyTorch)', sub: 'Data augmentation pipeline',
    desc: 'Implemented image augmentation techniques in PyTorch to improve dataset diversity and reduce overfitting during deep learning training.',
    stack: ['Python', 'PyTorch', 'Deep Learning'],
    code: 'https://github.com/elananu/image-augmentation-pytorch', demo: 'https://elananu-image-augmentation-pytorch-app-mzg5or.streamlit.app/' },
  { cat: 'mobile', img: 'images/murugan-pilgrim.jpg', tag: 'Flutter', title: 'Murugan Pilgrim Guide App', sub: 'Pilgrimage companion app',
    desc: 'A guide app supporting pilgrims with information and navigation for temple visits, built during the Zoho Corporation internship.',
    stack: ['Flutter', 'Dart'], code: 'https://github.com/elananu/murugan_pilgrim_app' },
  { cat: 'mobile', img: 'images/flutter-timetable.jpg', tag: 'Flutter', title: 'Flutter Timetable App', sub: 'Class and schedule timetable',
    desc: 'A Flutter-based timetable application for organizing and viewing class schedules.',
    stack: ['Flutter', 'Dart'], code: 'https://github.com/elananu/flutter_timetable_app' },
  { cat: 'mobile', img: 'images/meedicare.jpg', tag: 'Flutter', title: 'Meedicare', sub: 'Medicine reminder & tracker app',
    desc: 'A Flutter-based healthcare app for managing medicine reminders and patient records, with Firebase handling secure data storage.',
    stack: ['Flutter', 'Dart', 'Firebase'], code: 'https://github.com/elananu/meedicare_flutter_app' }
];

const FILTERS = [['all', 'All projects'], ['ai', 'AI / ML & data'], ['mobile', 'Mobile apps']];

const CERTS = [
  'NPTEL Elite: Big Data Computing', 'NPTEL: Natural Language Processing', 'Microsoft: Introduction to Machine Learning',
  'Udemy: Artificial Intelligence', 'HackerRank 5★: Java', 'HackerRank 5★: Python', 'HackerRank 5★: SQL',
  'IBM: Python for Data Science', 'Google: Introduction to Generative AI', 'Google: Foundations of Cybersecurity',
  'Cisco: Python Essentials 1', 'Cisco: Python Essentials 2', 'Cisco: Introduction to Cybersecurity',
  'Cisco: Introduction to Data Science', 'Cisco: Operating System Basics', 'Udemy: OS: File System & Threads',
  'HP Foundation: Data Science & Analytics', 'IUCEE: Overview of Emerging Technologies', 'GUVI: Python Programming'
];

const EMAIL = 'anusriie@gmail.com';

/* =====================================================
   LOGIC (you normally don't need to edit below)
   ===================================================== */

const $ = (s, r = document) => r.querySelector(s);
const chips = (arr, cls = 'chip') => arr.map(t => `<span class="${cls}">${t}</span>`).join('');

document.addEventListener('DOMContentLoaded', () => {

  // ---- Render content ----
  $('#stackGrid').innerHTML = Object.entries(SKILLS).map(([cat, items]) =>
    `<div class="stack-group"><p class="stack-cat">${cat}</p><div class="chip-row">${chips(items)}</div></div>`).join('');

  $('#timeline').innerHTML = EXPERIENCE.map(e =>
    `<div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-card">
      <div class="tc-header"><div><h3>${e.role}</h3><p class="company">${e.company} <span class="tc-loc">· ${e.loc}</span></p></div><span class="badge">${e.date}</span></div>
      <p>${e.text}</p></div></div>`).join('');

  $('#alsoRow').innerHTML = chips(ALSO, 'chip chip-quiet');
  $('#certGrid').innerHTML = CERTS.map(c => `<span class="cert-chip">${c}</span>`).join('');

  $('#stats').innerHTML = [
    [PROJECTS.length, 'Projects built'],
    [EXPERIENCE.length + ALSO.length, 'Internships'],
    [CERTS.length, 'Certifications']
  ].map(([n, l]) => `<div class="stat"><b data-count="${n}">0</b><span>${l}</span></div>`).join('');

  // ---- Projects + filters ----
  const grid = $('#projGrid');
  const projectHTML = p => `
    <article class="project-card reveal">
      <div class="project-image" data-initial="${p.title.charAt(0)}"><img src="${p.img}" alt="${p.title} preview" loading="lazy" onerror="this.parentElement.classList.add('noimg');this.remove()"></div>
      <p class="proj-tag">${p.tag}</p>
      <h3>${p.title}</h3>
      <p class="proj-sub">${p.sub}</p>
      <p class="proj-desc">${p.desc}</p>
      <div class="chip-row small">${chips(p.stack)}</div>
      <div class="proj-links">
        ${p.demo ? `<a class="demo" href="${p.demo}" target="_blank" rel="noopener">Live demo</a>` : ''}
        <a href="${p.code}" target="_blank" rel="noopener">Source code</a>
      </div>
    </article>`;

  const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); revealObserver.unobserve(en.target); }
      }), { threshold: 0.08 })
    : null;
  const watch = el => revealObserver ? revealObserver.observe(el) : el.classList.add('in');

  function renderProjects(cat) {
    const list = cat === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === cat);
    grid.innerHTML = list.map(projectHTML).join('');
    grid.querySelectorAll('.reveal').forEach(watch);
  }

  const filters = $('#filters');
  filters.innerHTML = FILTERS.map(([k, l], i) =>
    `<button class="filter-btn${i === 0 ? ' active' : ''}" data-cat="${k}" role="tab" aria-selected="${i === 0}">${l}</button>`).join('');
  filters.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filters.querySelectorAll('.filter-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    renderProjects(btn.dataset.cat);
  });
  renderProjects('all');

  // Card spotlight follows the cursor
  grid.addEventListener('mousemove', e => {
    const card = e.target.closest('.project-card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  // ---- Reveal other blocks ----
  document.querySelectorAll('.stack-group, .timeline-card, .contact-item, .cert-grid, .also-worked, .terminal')
    .forEach(el => { if (!el.classList.contains('terminal')) el.classList.add('reveal'); watch(el); });

  // ---- Typing effect ----
  const typed = $('#typed');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    typed.textContent = ROLES[0];
  } else {
    let r = 0, c = 0, del = false;
    (function tick() {
      const word = ROLES[r];
      typed.textContent = word.slice(0, c);
      let wait = del ? 35 : 75;
      if (!del && c === word.length) { del = true; wait = 1600; }
      else if (del && c === 0) { del = false; r = (r + 1) % ROLES.length; wait = 350; }
      c += del ? -1 : 1;
      setTimeout(tick, wait);
    })();
  }

  // ---- Count-up stats ----
  const statsEl = $('#stats');
  const countObs = new IntersectionObserver(([en]) => {
    if (!en.isIntersecting) return;
    statsEl.querySelectorAll('[data-count]').forEach(el => {
      const end = +el.dataset.count;
      let n = 0;
      const step = () => { n += 1; el.textContent = n + '+'; if (n < end) setTimeout(step, 900 / end); };
      reduce ? (el.textContent = end + '+') : step();
    });
    countObs.disconnect();
  });
  countObs.observe(statsEl);

  // ---- Mobile nav ----
  const hamburger = $('#hamburger');
  const navLinks = $('#navLinks');
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }));

  // ---- Scroll: progress bar, nav shadow, active link ----
  const navbar = $('#navbar');
  const progress = $('#progress');
  const sections = [...document.querySelectorAll('section[id]')];
  const links = [...navLinks.querySelectorAll('a')];

  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    navbar.style.boxShadow = y > 40 ? '0 4px 24px rgba(0,0,0,0.35)' : 'none';

    let current = 'top';
    sections.forEach(s => { if (y >= s.offsetTop - 140) current = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Contact form (opens visitor's email app, pre-filled) ----
  const form = $('#contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#contact-name').value.trim();
    const email = $('#contact-email').value.trim();
    const message = $('#contact-message').value.trim();

    const subject = encodeURIComponent('Portfolio contact from ' + name);
    const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
    window.location.href = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body;

    const btn = form.querySelector('button[type="submit"]');
    const label = btn.textContent;
    btn.textContent = 'Opening your email app…';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = label; btn.disabled = false; }, 2500);
  });
});
