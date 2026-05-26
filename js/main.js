/* ═══════════════════════════════════════════════════════════════
   GUSTOSSI BOLIVIA · main.js · 2026
═══════════════════════════════════════════════════════════════ */

/* ── DATOS SLIDER HERO ── */
const HERO_SLIDES = [
  { img: 'images/hero/slide-galleteria.jpg', cat: 'Galletería', nombre: 'Galletería',  sub: 'Las más ricas galletas de Bolivia',            link: 'pages/categoria.html?cat=galleteria' },
  { img: 'images/hero/slide-cracker.jpg',    cat: 'Galletería', nombre: 'Repostería',  sub: 'Las más ricas galletas de Bolivia',            link: 'pages/categoria.html?cat=reposteria' },
  { img: 'images/hero/slide-rellenas.jpg',   cat: 'Rellenas',   nombre: 'Rellena',     sub: 'Variedad en productos rellenos de sabores',    link: 'pages/categoria.html?cat=rellenas'   },
  { img: 'images/hero/slide-navideno.jpg',   cat: 'Navideño',   nombre: 'Navideño',    sub: 'Variedad en productos navideños: Panetón, etc.', link: 'pages/categoria.html?cat=navideno' },
  { img: 'images/hero/slide-wafer.jpg',      cat: 'Wafer',      nombre: 'Wafer',       sub: 'Deliciosas galletas obleas, de varios sabores.',  link: 'pages/categoria.html?cat=wafer'    },
  { img: 'images/hero/slide-gustossito.jpg', cat: 'Galletería', nombre: 'Queque',      sub: 'Deliciosas galletas obleas, de varios sabores.',  link: 'pages/categoria.html?cat=queques'  },
];

/* ── PRODUCTOS DESTACADOS ── */
const PRODS_DESTACADOS = [
  { nombre:'Panetón Tradicional',    cat:'Navideño',   img:'images/productos/paneton-tradicional.jpg',    slug:'navideno'   },
  { nombre:'Panetón de Chocolate',   cat:'Navideño',   img:'images/productos/paneton-chocolate.jpg',      slug:'navideno'   },
  { nombre:'Rosca Navideña',         cat:'Navideño',   img:'images/productos/rosca-navidena.jpg',         slug:'navideno'   },
  { nombre:'Galleta Chip Almendra',  cat:'Galletería', img:'images/productos/galleta-almendra.jpg',       slug:'galleteria' },
  { nombre:'Galleta Chip Chocolate', cat:'Galletería', img:'images/productos/galleta-chip-chocolate.jpg', slug:'galleteria' },
  { nombre:'Galleta de Coco',        cat:'Galletería', img:'images/productos/galleta-coco.jpg',           slug:'galleteria' },
  { nombre:'Galleta de Hojaldre',    cat:'Galletería', img:'images/productos/galleta-hojaldre.jpg',       slug:'galleteria' },
  { nombre:'Galleta Choco Naranja',  cat:'Galletería', img:'images/productos/galleta-choco-naranja.jpg',  slug:'galleteria' },
];

const REVIEWS = [
  { nombre:'Irene Miranda',    src:'Facebook',  ico:'fa-brands fa-facebook',  av:'images/reviews/irene.png',        ini:'IM', txt:'"Me encantan las deliciosas galletas Cracker. Son las mejores que he probado en Bolivia."' },
  { nombre:'Juan Velarde',     src:'Facebook',  ico:'fa-brands fa-facebook',  av:'images/reviews/juan-velarde.png', ini:'JV', txt:'"Soy un adicto a las galletas rellenitas. Las compro todas las semanas sin falta."' },
  { nombre:'Cristina Aguilar', src:'Instagram', ico:'fa-brands fa-instagram', av:'images/reviews/cristina.png',     ini:'CA', txt:'"Quisiera más sabores de las galletas rellenitas, me encantan. ¡Sigan así!"' },
  { nombre:'Juan Peredo',      src:'Google',    ico:'fa-brands fa-google',    av:'images/reviews/juan-peredo.png',  ini:'JP', txt:'"Utilizo las deliciosas galletas crackers integrales en mis preparaciones. ¡Excelentes!"' },
];

const RECETAS = [
  { titulo:'Tiramisú con Galletas Cracker',       fecha:'Nov 12, 2020', img:'images/recetas/tiramisu.jpg'    },
  { titulo:'Tarta de Crema con Galletas Cracker', fecha:'Nov 12, 2020', img:'images/recetas/tarta-crema.png' },
  { titulo:'Leche Frita con Galletas de Agua',    fecha:'Nov 12, 2020', img:'images/recetas/leche-frita.jpg' },
];

const STATS = [
  { n:'25+',   l:'Años de experiencia', ico:'fa-calendar-check' },
  { n:'30+',   l:'Productos en línea',  ico:'fa-boxes-stacked'  },
  { n:'500+',  l:'Puntos de venta',     ico:'fa-store'          },
  { n:'100K+', l:'Clientes satisfechos',ico:'fa-face-smile'     },
];

const PROCESO_STEPS = [
  { ico: 'fa-wheat-awn',     num: '01', title: 'Selección',     desc: 'Elegimos los mejores ingredientes naturales de Bolivia y el mundo.' },
  { ico: 'fa-hand-sparkles', num: '02', title: 'Preparación',   desc: 'Mezclamos con recetas artesanales perfeccionadas por 25 años.' },
  { ico: 'fa-fire-burner',   num: '03', title: 'Horneado',      desc: 'Horneamos a temperatura exacta para lograr el punto perfecto.' },
  { ico: 'fa-box-open',      num: '04', title: 'Empaque',       desc: 'Empacamos cuidadosamente para mantener la frescura y calidad.' },
];

const IG_IMAGES = [
  'images/productos/galleta-chip-chocolate.jpg',
  'images/productos/paneton-tradicional.jpg',
  'images/hero/slide-galleteria.jpg',
  'images/productos/galleta-coco.jpg',
  'images/productos/rosca-navidena.jpg',
  'images/hero/slide-wafer.jpg',
  'images/productos/galleta-almendra.jpg',
  'images/productos/paneton-chocolate.jpg',
  'images/hero/slide-rellenas.jpg',
  'images/productos/galleta-hojaldre.jpg',
  'images/productos/galleta-choco-naranja.jpg',
  'images/hero/slide-gustossito.jpg',
];

const TIMELINE = [
  { year: '2000', title: 'Fundación',           desc: 'Nace Industrias Alimenticias Gustossi S.R.L. en la ciudad de Santa Cruz de la Sierra, con una visión de ofrecer productos de calidad.',  img: 'images/hero/slide-galleteria.jpg' },
  { year: '2005', title: 'Primera línea',        desc: 'Lanzamos nuestra primera línea de galletas artesanales que rápidamente conquistan el mercado cruceño.',                                 img: 'images/productos/galleta-chip-chocolate.jpg' },
  { year: '2010', title: 'Expansión nacional',   desc: 'Nuestros productos llegan a los 9 departamentos de Bolivia. Se inauguran nuevas líneas de producción.',                                  img: 'images/factory.png' },
  { year: '2015', title: 'Línea Navideña',       desc: 'Se lanza la exitosa línea de Panetón Gustossi, que se convierte en favorita de las familias bolivianas.',                               img: 'images/productos/paneton-tradicional.jpg' },
  { year: '2020', title: 'Innovación',           desc: 'Incorporamos nuevas tecnologías de producción y ampliamos nuestro portafolio con wafers, queques y rellenas.',                           img: 'images/hero/slide-wafer.jpg' },
  { year: '2026', title: 'Líderes del mercado',  desc: 'Consolidados como una de las marcas líderes en galletería de Bolivia, con más de 30 productos y 500 puntos de venta.',                  img: 'images/distribution.png' },
];

const CITIES = [
  { name: 'Santa Cruz',    ico: 'fa-building',      desc: 'Sede central y planta de producción' },
  { name: 'La Paz',        ico: 'fa-mountain-sun',   desc: 'Distribución en toda la ciudad' },
  { name: 'Cochabamba',    ico: 'fa-city',           desc: 'Centro de distribución regional' },
  { name: 'Sucre',         ico: 'fa-landmark',       desc: 'Cobertura en capital constitucional' },
  { name: 'Tarija',        ico: 'fa-wine-glass',     desc: 'Presencia en mercados locales' },
  { name: 'Oruro',         ico: 'fa-masks-theater',  desc: 'Distribución activa' },
  { name: 'Potosí',        ico: 'fa-gem',            desc: 'Llegamos a la ciudad imperial' },
  { name: 'Beni',          ico: 'fa-tree',           desc: 'Cobertura en Trinidad y Riberalta' },
  { name: 'Pando',         ico: 'fa-leaf',           desc: 'Presencia en Cobija' },
];

const CERTS = [
  { ico: 'fa-shield-halved',    title: 'SENASAG',           desc: 'Registro sanitario y control de calidad alimentaria certificada por el Servicio Nacional.' },
  { ico: 'fa-certificate',      title: 'ISO 9001',          desc: 'Sistema de gestión de calidad que garantiza procesos estandarizados y mejora continua.' },
  { ico: 'fa-leaf',             title: 'Ingredientes Naturales', desc: 'Utilizamos ingredientes naturales seleccionados, sin conservantes artificiales dañinos.' },
  { ico: 'fa-recycle',          title: 'Compromiso Ambiental',   desc: 'Empaques responsables y procesos que minimizan el impacto ambiental.' },
  { ico: 'fa-users',            title: 'Responsabilidad Social', desc: 'Generamos empleo digno y apoyamos a comunidades productoras bolivianas.' },
  { ico: 'fa-truck-fast',       title: 'Cadena de Frío',         desc: 'Distribución con cadena de frío que garantiza la frescura de cada producto.' },
];

/* ══════════════════════════════════
   HERO FULLSCREEN SLIDER
══════════════════════════════════ */
let slideIdx = 0, sliderTimer, isAnimating = false;

function renderHeroFS() {
  const track   = document.getElementById('hero-fs-track');
  const dotsWrap = document.getElementById('hero-fs-dots');
  if (!track) return;

  // Inyectar slides
  track.innerHTML = HERO_SLIDES.map((s, i) => `
    <div class="hfs-slide ${i === 0 ? 'active' : ''}">
      <img src="${s.img}" alt="${s.nombre}" loading="${i === 0 ? 'eager' : 'lazy'}">
    </div>`).join('');

  // Inyectar dots
  dotsWrap.innerHTML = HERO_SLIDES.map((_, i) =>
    `<button class="hfs-dot ${i === 0 ? 'active' : ''}"
             onclick="goSlide(${i})" aria-label="Imagen ${i+1}"></button>`
  ).join('');

  // Animar contenido inicial
  animContent(0);
  startAutoSlide();
}

function animContent(i) {
  const s       = HERO_SLIDES[i];
  const content = document.querySelector('.hero-fs-content');
  const brand   = document.getElementById('hfs-brand');
  const cat     = document.getElementById('hfs-cat');
  const sub     = document.getElementById('hfs-sub');
  const btn     = document.getElementById('hfs-btn');
  if (!content) return;

  // Reset animación
  content.classList.remove('anim');
  void content.offsetWidth; // reflow

  // Actualizar texto
  if (brand) brand.textContent = 'Gustossi';
  if (cat)   cat.textContent   = s.nombre;
  if (sub)   sub.textContent   = s.sub;
  if (btn)   btn.href          = s.link;

  // Disparar animación
  requestAnimationFrame(() => content.classList.add('anim'));
}

function goSlide(n) {
  if (isAnimating) return;
  isAnimating = true;

  const slides = document.querySelectorAll('.hfs-slide');
  const dots   = document.querySelectorAll('.hfs-dot');

  slides[slideIdx]?.classList.remove('active');
  dots[slideIdx]?.classList.remove('active');

  slideIdx = (n + slides.length) % slides.length;

  slides[slideIdx]?.classList.add('active');
  dots[slideIdx]?.classList.add('active');

  animContent(slideIdx);

  setTimeout(() => { isAnimating = false; }, 1000);
}

function startAutoSlide() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => goSlide(slideIdx + 1), 5500);
}

window.prevSlide = () => { goSlide(slideIdx - 1); startAutoSlide(); };
window.nextSlide = () => { goSlide(slideIdx + 1); startAutoSlide(); };
window.goSlide   = (n) => { goSlide(n);           startAutoSlide(); };

/* ══════════════════════════════════
   CATEGORÍAS
══════════════════════════════════ */
function renderCats() {
  const grid = document.getElementById('cats-grid');
  if (!grid || typeof CATS_DATA === 'undefined') return;
  const entries = Object.entries(CATS_DATA);
  grid.innerHTML = entries.map(([slug, c], i) => `
    <a href="pages/categoria.html?cat=${slug}" class="cat-card reveal">
      ${c.heroImg
        ? `<img src="${c.heroImg}" alt="${c.nombre}" loading="lazy">`
        : `<div class="cat-card-ico"><i class="fa-solid ${c.icon}"></i></div>`}
      <div class="cat-grad"></div>
      <div class="cat-num">0${i + 1}</div>
      <div class="cat-body">
        <div class="cat-tag"><i class="fa-solid fa-tag"></i> Línea</div>
        <div class="cat-name">${c.nombre}</div>
        <div class="cat-desc">${c.descripcion}</div>
        <span class="cat-arrow">Ver productos <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </a>`).join('');

  const flist = document.getElementById('footer-cats-list');
  if (flist) flist.innerHTML = entries.map(([slug, c]) =>
    `<li><a href="pages/categoria.html?cat=${slug}">
      <i class="fa-solid fa-chevron-right"></i> ${c.nombre}</a></li>`
  ).join('');
  initReveal();
}

/* ══════════════════════════════════
   PRODUCTOS + FILTROS
══════════════════════════════════ */
function renderProds(filtro = 'Todos') {
  const grid = document.getElementById('prods-grid');
  if (!grid) return;
  const lista = filtro === 'Todos'
    ? PRODS_DESTACADOS
    : PRODS_DESTACADOS.filter(p => p.cat === filtro);
  grid.innerHTML = lista.map(p => `
    <a href="pages/categoria.html?cat=${p.slug}" class="prod-card reveal">
      <div class="prod-img">
        <img src="${p.img}" alt="${p.nombre}" loading="lazy">
        <span class="prod-badge">${p.cat}</span>
      </div>
      <div class="prod-body">
        <div class="prod-cat">${p.cat}</div>
        <div class="prod-name">${p.nombre}</div>
        <span class="prod-link">Ver categoría <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </a>`).join('');
  initReveal();
}

function renderFiltros() {
  const wrap = document.getElementById('prods-filters');
  if (!wrap) return;
  const cats = ['Todos', ...new Set(PRODS_DESTACADOS.map(p => p.cat))];
  wrap.innerHTML = cats.map(c =>
    `<button class="fpill ${c === 'Todos' ? 'active' : ''}"
             onclick="setFiltro('${c}', this)">${c}</button>`
  ).join('');
}
window.setFiltro = function(cat, btn) {
  document.querySelectorAll('.fpill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProds(cat);
};

/* ══════════════════════════════════
   PROCESO (NEW)
══════════════════════════════════ */
function renderProceso() {
  const grid = document.getElementById('proceso-grid');
  if (!grid) return;
  grid.innerHTML = PROCESO_STEPS.map(s => `
    <div class="proceso-step reveal">
      <div class="proceso-num">${s.num}</div>
      <div class="proceso-ico"><i class="fa-solid ${s.ico}"></i></div>
      <div class="proceso-title">${s.title}</div>
      <div class="proceso-desc">${s.desc}</div>
    </div>`).join('');
  initReveal();
}

/* ══════════════════════════════════
   INSTAGRAM GALLERY (NEW)
══════════════════════════════════ */
function renderInstagram() {
  const grid = document.getElementById('ig-grid');
  if (!grid) return;
  grid.innerHTML = IG_IMAGES.map((img, i) => `
    <a href="https://www.instagram.com/gustossibolivia/" target="_blank" class="ig-cell reveal" style="transition-delay:${i * 50}ms">
      <img src="${img}" alt="Gustossi Bolivia" loading="lazy">
    </a>`).join('');
  initReveal();
}

/* ══════════════════════════════════
   STATS
══════════════════════════════════ */
function renderStats() {
  const row = document.getElementById('stats-row');
  if (!row) return;
  row.innerHTML = STATS.map(s => `
    <div class="stat-cell reveal">
      <div class="stat-ico"><i class="fa-solid ${s.ico}"></i></div>
      <div class="stat-n">${s.n}</div>
      <div class="stat-l">${s.l}</div>
    </div>`).join('');
  initReveal();
}

/* ══════════════════════════════════
   REVIEWS
══════════════════════════════════ */
function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;
  grid.innerHTML = REVIEWS.map(r => `
    <div class="rev-card reveal">
      <div class="rev-av">
        <img src="${r.av}" alt="${r.nombre}"
          onerror="this.parentElement.outerHTML='<div class=\\'rev-av-fb\\'>${r.ini}</div>'">
      </div>
      <div class="rev-name">${r.nombre}</div>
      <div class="rev-src"><i class="${r.ico}"></i> ${r.src}</div>
      <div class="rev-stars">${'<i class="fa-solid fa-star"></i>'.repeat(5)}</div>
      <p class="rev-text">${r.txt}</p>
    </div>`).join('');
  initReveal();
}

/* ══════════════════════════════════
   RECETAS
══════════════════════════════════ */
function renderRecetas() {
  const grid = document.getElementById('recipes-grid');
  if (!grid) return;
  grid.innerHTML = RECETAS.map(r => `
    <a href="#" class="rec-card reveal">
      <div class="rec-img">
        <img src="${r.img}" alt="${r.titulo}" loading="lazy">
      </div>
      <div class="rec-body">
        <div class="rec-date"><i class="fa-solid fa-calendar"></i> ${r.fecha}</div>
        <div class="rec-title">${r.titulo}</div>
      </div>
    </a>`).join('');
  initReveal();
}

/* ══════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════ */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 90);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

/* ══════════════════════════════════
   TIMELINE (NEW)
══════════════════════════════════ */
function renderTimeline() {
  const wrap = document.getElementById('timeline');
  if (!wrap) return;
  wrap.innerHTML = TIMELINE.map((t, i) => `
    <div class="tl-item reveal ${i % 2 === 0 ? 'tl-left' : 'tl-right'}">
      <div class="tl-img">
        <img src="${t.img}" alt="${t.title}" loading="lazy">
      </div>
      <div class="tl-content">
        <div class="tl-year">${t.year}</div>
        <div class="tl-title">${t.title}</div>
        <div class="tl-desc">${t.desc}</div>
      </div>
    </div>`).join('');
  initReveal();
}

/* ══════════════════════════════════
   DISTRIBUTION (NEW)
══════════════════════════════════ */
function renderDistribution() {
  const wrap = document.getElementById('dist-cities');
  if (!wrap) return;
  wrap.innerHTML = CITIES.map(c => `
    <div class="city-card reveal">
      <div class="city-ico"><i class="fa-solid ${c.ico}"></i></div>
      <div class="city-info">
        <div class="city-name">${c.name}</div>
        <div class="city-desc">${c.desc}</div>
      </div>
    </div>`).join('');
  initReveal();
}

/* ══════════════════════════════════
   CERTIFICATIONS (NEW)
══════════════════════════════════ */
function renderCerts() {
  const wrap = document.getElementById('certs-grid');
  if (!wrap) return;
  wrap.innerHTML = CERTS.map(c => `
    <div class="cert-card reveal">
      <div class="cert-ico"><i class="fa-solid ${c.ico}"></i></div>
      <div class="cert-title">${c.title}</div>
      <div class="cert-desc">${c.desc}</div>
    </div>`).join('');
  initReveal();
}

/* ══════════════════════════════════
   SCROLL PROGRESS BAR (NEW)
══════════════════════════════════ */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress  = (scrollTop / docHeight) * 100;
    bar.style.width = progress + '%';
  }, { passive: true });
}

/* ══════════════════════════════════
   BACK TO TOP (NEW)
══════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ══════════════════════════════════
   MASCOTA FLOATING (NEW)
══════════════════════════════════ */
function initMascota() {
  const mascota = document.getElementById('mascota-float');
  if (!mascota) return;
  // Show mascota only after scrolling past hero
  mascota.style.opacity = '0';
  mascota.style.transition = 'opacity .5s, transform .3s';
  window.addEventListener('scroll', () => {
    mascota.style.opacity = window.scrollY > 500 ? '1' : '0';
  }, { passive: true });
  // Click redirects to WhatsApp
  mascota.addEventListener('click', () => {
    window.open('http://wa.me/59175256114', '_blank');
  });
}

/* ══════════════════════════════════
   NAV
══════════════════════════════════ */
function initNav() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const check = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', check, { passive: true });
  check();
}

/* ══════════════════════════════════
   MENÚ MÓVIL
══════════════════════════════════ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu?.classList.toggle('open');
  document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
});
window.closeMobile = () => {
  hamburger?.classList.remove('open');
  mobileMenu?.classList.remove('open');
  document.body.style.overflow = '';
};

/* ══════════════════════════════════
   SWIPE EN MÓVIL (hero)
══════════════════════════════════ */
let touchStartX = 0;
document.querySelector('.hero-fs')?.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
document.querySelector('.hero-fs')?.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    diff > 0 ? nextSlide() : prevSlide();
  }
}, { passive: true });

/* ══════════════════════════════════
   INIT — Carga datos desde BD y renderiza
══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Intentar cargar datos desde la API / Base de datos
  if (typeof cargarDatosDesdeAPI === 'function') {
    await cargarDatosDesdeAPI();
  }

  // 2. Usar datos de BD si están disponibles, sino usar los locales
  if (window.HERO_SLIDES_DB) {
    HERO_SLIDES.length = 0;
    window.HERO_SLIDES_DB.forEach(s => HERO_SLIDES.push(s));
  }
  if (window.REVIEWS_DB) {
    REVIEWS.length = 0;
    window.REVIEWS_DB.forEach(r => REVIEWS.push(r));
  }
  if (window.RECETAS_DB) {
    RECETAS.length = 0;
    window.RECETAS_DB.forEach(r => RECETAS.push(r));
  }
  if (window.STATS_DB) {
    STATS.length = 0;
    window.STATS_DB.forEach(s => STATS.push(s));
  }
  if (window.TIMELINE_DB) {
    TIMELINE.length = 0;
    window.TIMELINE_DB.forEach(t => TIMELINE.push(t));
  }
  if (window.CITIES_DB) {
    CITIES.length = 0;
    window.CITIES_DB.forEach(c => CITIES.push(c));
  }
  if (window.CERTS_DB) {
    CERTS.length = 0;
    window.CERTS_DB.forEach(c => CERTS.push(c));
  }

  // 3. Renderizar todas las secciones
  renderHeroFS();
  renderCats();
  renderFiltros();
  renderProds();
  renderProceso();
  renderStats();
  renderReviews();
  renderRecetas();
  renderInstagram();
  renderTimeline();
  renderDistribution();
  renderCerts();
  initReveal();
  initNav();
  initScrollProgress();
  initBackToTop();

  // 4. Newsletter — conectar al API
  const nlForm = document.querySelector('.newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = nlForm.querySelector('.nl-input').value;
      const btn = nlForm.querySelector('.nl-btn');
      try {
        const res = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        const data = await res.json();
        btn.textContent = data.success ? '¡Suscrito! ✓' : data.message;
        btn.style.background = data.success ? '#25D366' : '#E05A2A';
      } catch {
        btn.textContent = '¡Gracias! ✓';
        btn.style.background = '#25D366';
      }
    });
  }

  // 5. Swipe en móvil
  const heroEl = document.querySelector('.hero-fs');
  if (heroEl) {
    let tx = 0;
    heroEl.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive:true });
    heroEl.addEventListener('touchend',   e => {
      const d = tx - e.changedTouches[0].clientX;
      if (Math.abs(d) > 50) d > 0 ? nextSlide() : prevSlide();
    }, { passive:true });
  }
});
