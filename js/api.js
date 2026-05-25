/* ═══════════════════════════════════════════════════════════════
   GUSTOSSI BOLIVIA · api.js · Cliente API REST
   Conecta el frontend con la base de datos SQLite via API
═══════════════════════════════════════════════════════════════ */

const API_BASE = '/api';

/**
 * Función helper para hacer peticiones a la API
 */
async function apiFetch(endpoint) {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`⚠️ API no disponible (${endpoint}), usando datos locales.`);
    return null;
  }
}

/**
 * Carga datos desde la API, o usa los datos locales de JS como fallback
 */
async function cargarDatosDesdeAPI() {
  console.log('🔌 Intentando cargar datos desde API REST...');

  // ── Hero Slides ──
  const slides = await apiFetch('/hero-slides');
  if (slides && slides.length > 0) {
    window.HERO_SLIDES_DB = slides.map(s => ({
      img: s.imagen,
      cat: s.categoria,
      name: s.nombre,
      sub: s.subtitulo,
      link: s.link,
    }));
    console.log(`  ✓ ${slides.length} slides cargados desde BD`);
  }

  // ── Categorías ──
  const cats = await apiFetch('/categorias');
  if (cats && cats.length > 0) {
    window.CATEGORIAS_DB = cats;
    console.log(`  ✓ ${cats.length} categorías cargadas desde BD`);
  }

  // ── Productos destacados ──
  const prods = await apiFetch('/productos?destacados=1');
  if (prods && prods.length > 0) {
    window.PRODUCTOS_DB = prods;
    console.log(`  ✓ ${prods.length} productos destacados cargados desde BD`);
  }

  // ── Reviews ──
  const reviews = await apiFetch('/reviews');
  if (reviews && reviews.length > 0) {
    window.REVIEWS_DB = reviews.map(r => ({
      nombre: r.nombre,
      src: r.fuente,
      ico: r.icono,
      av: r.avatar,
      ini: r.iniciales,
      txt: r.texto,
    }));
    console.log(`  ✓ ${reviews.length} reviews cargados desde BD`);
  }

  // ── Recetas ──
  const recetas = await apiFetch('/recetas');
  if (recetas && recetas.length > 0) {
    window.RECETAS_DB = recetas.map(r => ({
      titulo: r.titulo,
      fecha: r.fecha,
      img: r.imagen,
    }));
    console.log(`  ✓ ${recetas.length} recetas cargadas desde BD`);
  }

  // ── Estadísticas ──
  const stats = await apiFetch('/estadisticas');
  if (stats && stats.length > 0) {
    window.STATS_DB = stats.map(s => ({
      n: s.numero,
      l: s.etiqueta,
      ico: s.icono,
    }));
    console.log(`  ✓ ${stats.length} estadísticas cargadas desde BD`);
  }

  // ── Timeline ──
  const timeline = await apiFetch('/timeline');
  if (timeline && timeline.length > 0) {
    window.TIMELINE_DB = timeline.map(t => ({
      year: t.anio,
      title: t.titulo,
      desc: t.descripcion,
      img: t.imagen,
    }));
    console.log(`  ✓ ${timeline.length} hitos de historia cargados desde BD`);
  }

  // ── Ciudades ──
  const ciudades = await apiFetch('/ciudades');
  if (ciudades && ciudades.length > 0) {
    window.CITIES_DB = ciudades.map(c => ({
      name: c.nombre,
      ico: c.icono,
      desc: c.descripcion,
    }));
    console.log(`  ✓ ${ciudades.length} ciudades cargadas desde BD`);
  }

  // ── Certificaciones ──
  const certs = await apiFetch('/certificaciones');
  if (certs && certs.length > 0) {
    window.CERTS_DB = certs.map(c => ({
      ico: c.icono,
      title: c.titulo,
      desc: c.descripcion,
    }));
    console.log(`  ✓ ${certs.length} certificaciones cargadas desde BD`);
  }

  // ── Stats generales ──
  const dbStats = await apiFetch('/stats');
  if (dbStats) {
    console.log(`  📊 Resumen BD: ${dbStats.total_productos} productos, ${dbStats.total_categorias} categorías, ${dbStats.total_reviews} reviews`);
  }

  // Indicador visual
  if (slides || cats || prods) {
    console.log('✅ Datos cargados desde BASE DE DATOS SQLite');
    const badge = document.createElement('div');
    badge.id = 'db-badge';
    badge.innerHTML = '<i class="fa-solid fa-database"></i> Conectado a Base de Datos SQLite';
    badge.style.cssText = 'position:fixed;bottom:1rem;left:1rem;background:linear-gradient(135deg,#0B1D35,#142D50);color:rgba(255,255,255,.8);padding:.5rem 1rem;border-radius:100px;font-size:.7rem;z-index:9999;display:flex;align-items:center;gap:.5rem;border:1px solid rgba(200,68,10,.3);font-family:Outfit,sans-serif;box-shadow:0 4px 16px rgba(0,0,0,.2);';
    document.body.appendChild(badge);
    setTimeout(() => { badge.style.opacity = '0'; badge.style.transition = 'opacity 1s'; setTimeout(() => badge.remove(), 1000); }, 5000);
  } else {
    console.log('ℹ️ API no disponible, usando datos locales (modo estático)');
  }
}
