/* =====================================================
   NAV — mobile toggle + active link
   ===================================================== */
function initNav(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('is-open'))
    );
  }
}

/* =====================================================
   HERO — showreel with graceful "coming soon" fallback
   ===================================================== */
function initHero(){
  const hero = document.querySelector('.hero');
  const video = hero ? hero.querySelector('video') : null;
  if(!hero || !video) return;

  const showPlaceholder = () => hero.classList.add('hero--noreel');

  // No usable source at all -> placeholder immediately
  const src = video.querySelector('source');
  if(!src || !src.getAttribute('src')){
    showPlaceholder();
    return;
  }
  video.addEventListener('error', showPlaceholder);
  // If it can't start playing shortly, assume the file is missing/broken
  setTimeout(() => { if(video.readyState === 0) showPlaceholder(); }, 1500);
}

/* =====================================================
   Helper: build a still/preview media block
   ===================================================== */
function buildStillWrap({ still, preview, alt }){
  const wrap = document.createElement('div');
  wrap.className = 'still-wrap';

  const img = document.createElement('img');
  img.className = 'still';
  img.loading = 'lazy';
  img.alt = alt || '';
  img.src = still;
  img.addEventListener('error', () => wrap.classList.add('is-placeholder'), { once:true });
  wrap.appendChild(img);

  if(preview){
    const vid = document.createElement('video');
    vid.className = 'preview';
    vid.muted = true; vid.loop = true; vid.playsInline = true; vid.preload = 'none';
    vid.src = preview;
    wrap.appendChild(vid);

    const tag = document.createElement('span');
    tag.className = 'play-tag';
    tag.textContent = 'Preview';
    wrap.appendChild(tag);

    wrap.addEventListener('mouseenter', () => { vid.play().catch(()=>{}); });
    wrap.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
  }

  return wrap;
}

/* =====================================================
   CINEMATOGRAPHY GRID (index.html)
   ===================================================== */
function renderCinemaGrid(){
  const grid = document.getElementById('work-grid');
  if(!grid || !window.CINEMA_PROJECTS) return;

  window.CINEMA_PROJECTS.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const link = document.createElement('a');
    link.className = 'card-link';
    link.href = `project.html?type=cinema&slug=${encodeURIComponent(p.slug)}`;

    link.appendChild(buildStillWrap({ still:p.still, preview:p.preview, alt:p.title }));

    card.appendChild(link);
    grid.appendChild(card);
  });
}

/* =====================================================
   FEATURE BLOCKS — used by director.html and projects.html
   ===================================================== */
function renderFeatureList(containerId, projects, type){
  const wrap = document.getElementById(containerId);
  if(!wrap || !projects) return;

  projects.forEach(p => {
    const feature = document.createElement('article');
    feature.className = 'feature';

    const media = buildStillWrap({ still:p.still, alt:p.title });

    const copy = document.createElement('div');
    copy.innerHTML = `
      <span class="feature-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p class="synopsis">${p.synopsis}</p>
      <a class="view-link" href="project.html?type=${type}&slug=${encodeURIComponent(p.slug)}">Voir le projet →</a>
    `;

    feature.appendChild(media);
    feature.appendChild(copy);
    wrap.appendChild(feature);
  });
}

/* =====================================================
   PROJECT DETAIL PAGE (project.html)
   ===================================================== */
function renderProjectDetail(){
  const root = document.getElementById('detail-root');
  if(!root) return;

  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const slug = params.get('slug');
  const listByType = {
    director: window.DIRECTOR_PROJECTS,
    research: window.RESEARCH_PROJECTS,
    cinema: window.CINEMA_PROJECTS
  };
  const backByType = {
    director: { href: 'director.html', label: '← Director' },
    research: { href: 'projects.html', label: '← Projects' },
    cinema:   { href: 'index.html',    label: '← Cinematographer' }
  };
  const list = listByType[type] || window.CINEMA_PROJECTS;
  const project = (list || []).find(p => p.slug === slug);
  const back = backByType[type] || backByType.cinema;

  if(!project){
    root.innerHTML = `
      <div class="detail-head">
        <a class="back-link" href="${back.href}">← Retour</a>
        <h1>Projet introuvable</h1>
        <p class="detail-synopsis">Vérifie le lien, ou choisis un projet depuis le menu.</p>
      </div>`;
    return;
  }

  const backHref = back.href;
  const backLabel = back.label;

  const slateFields = Object.entries(project.slate || {}).map(([k,v]) => `
    <div class="field"><span class="k">${k}</span><span class="v">${v}</span></div>
  `).join('');

  const directorLine = type === 'cinema'
    ? `<div class="director-credit">Dir. ${project.director}</div>`
    : '';

  root.innerHTML = `
    <div class="detail-head">
      <a class="back-link" href="${backHref}">${backLabel}</a>
      <h1>${project.title}</h1>
      ${directorLine}
      <p class="detail-synopsis">${project.synopsis || project.credits || ''}</p>
      <div class="slate">${slateFields}</div>
    </div>
    <div class="detail-gallery" id="detail-gallery"></div>
  `;

  const gallery = document.getElementById('detail-gallery');
  (project.gallery || []).forEach(src => {
    gallery.appendChild(buildStillWrap({ still: src, alt: project.title }));
  });

  document.title = `${project.title} — Ismael Sedrati`;
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHero();
  renderCinemaGrid();
  renderFeatureList('director-features', window.DIRECTOR_PROJECTS, 'director');
  renderFeatureList('research-features', window.RESEARCH_PROJECTS, 'research');
  renderProjectDetail();
});
