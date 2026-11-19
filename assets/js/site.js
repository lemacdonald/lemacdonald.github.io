/* Progressive enhancement: all content and navigation work without JavaScript. */
(() => {
  const animations = [...document.querySelectorAll('video[data-loop-animation]')];
  if (animations.length) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePlayback = () => {
      animations.forEach(video => {
        video.muted = true;
        video.autoplay = !reducedMotion.matches;
        if (reducedMotion.matches) video.pause();
        else video.play().catch(() => { /* Native controls remain available if autoplay is blocked. */ });
      });
    };
    updatePlayback();
    reducedMotion.addEventListener('change', updatePlayback);
  }
  document.querySelectorAll('[data-reveal-email]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => {
      const address = String.fromCharCode(108, 101, 109, 97, 99, 100, 111, 110, 97, 108, 100, 64, 112, 114, 111, 116, 111, 110, 109, 97, 105, 108, 46, 99, 111, 109);
      const link = document.createElement('a');
      link.href = 'mailto:' + address;
      link.textContent = address;
      button.replaceWith(link);
      link.focus();
    });
  });
  const input = document.querySelector('#publication-search');
  if (!input) return;
  const controls = document.querySelector('.pub-controls');
  const papers = [...document.querySelectorAll('.publication-section .paper')];
  const sections = [...document.querySelectorAll('.publication-section')];
  const count = document.querySelector('#publication-count');
  controls.hidden = false;
  const search = () => {
    const terms = input.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    papers.forEach(paper => {
      const matches = terms.every(term => paper.textContent.toLocaleLowerCase().includes(term));
      paper.hidden = !matches;
      if (matches) visible++;
    });
    sections.forEach(section => {
      section.hidden = ![...section.querySelectorAll('.paper')].some(paper => !paper.hidden);
    });
    count.textContent = terms.length ? `${visible} of ${papers.length} publications shown` : `${papers.length} publications`;
  };
  input.addEventListener('input', search);
  input.addEventListener('keydown', event => {
    if (event.key === 'Escape') { input.value = ''; search(); }
  });
  search();
})();
