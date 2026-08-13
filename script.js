document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('vimeo-player');
  const closeBtn = document.querySelector('.close-btn');

  const navWork = document.querySelector('a[href="#work"]');
  const navAbout = document.querySelector('a[href="#about"]');
  const workSection = document.getElementById('work');
  const aboutSection = document.getElementById('about');

  // Gestion de la navigation Work / About
  navWork.addEventListener('click', (e) => {
    e.preventDefault();
    workSection.classList.remove('hidden');
    aboutSection.classList.add('hidden');
    navWork.classList.add('active');
    navAbout.classList.remove('active');
  });

  navAbout.addEventListener('click', (e) => {
    e.preventDefault();
    aboutSection.classList.remove('hidden');
    workSection.classList.add('hidden');
    navAbout.classList.add('active');
    navWork.classList.remove('active');
  });

  // Gestion de la Modal Vidéo (Vimeo)
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const vimeoId = card.getAttribute('data-vimeo-id');
      if (vimeoId) {
        iframe.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&color=ffffff&title=0&byline=0&portrait=0`;
        modal.classList.remove('hidden');
      }
    });
  });

  // Fermer la modal
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.add('hidden');
    iframe.src = '';
  }
});
