// Archivo JavaScript principal para interactividad del portafolio.
// Aquí más adelante se pueden manejar animaciones, filtros de proyectos,
// o integración con APIs/servicios relacionados a IA.

document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave para links internos
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetSelector = link.getAttribute('data-target') || link.getAttribute('href');
      if (!targetSelector || !targetSelector.startsWith('#')) return;

      const target = document.querySelector(targetSelector);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', targetSelector);
    });
  });

  // Activar el filtro de proyectos
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';

      // estilo de botón activo
      filterButtons.forEach((b) => {
        b.classList.remove('border-sky-500/60', 'bg-sky-500/10', 'text-sky-200');
        b.classList.add('border-slate-600', 'bg-slate-900/60', 'text-slate-200');
      });
      btn.classList.remove('border-slate-600', 'bg-slate-900/60', 'text-slate-200');
      btn.classList.add('border-sky-500/60', 'bg-sky-500/10', 'text-sky-200');

      projectCards.forEach((card) => {
        const tags = (card.getAttribute('data-tags') || '').split(' ');
        const matches = filter === 'all' || tags.includes(filter);
        card.classList.toggle('hidden', !matches);
      });
    });
  });

  // Aplicar filtro "Todo" por defecto (si existe)
  const defaultFilter = document.querySelector('.project-filter-btn[data-filter="all"]');
  if (defaultFilter) {
    defaultFilter.click();
  }
});
