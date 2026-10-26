function toggleMoreWorks() {
  const dropdown = document.getElementById('moreWorksDropdown');
  const button = document.querySelector('.more-works-btn');
  const isOpen = dropdown.classList.toggle('show');
  button.classList.toggle('active', isOpen);
  button.setAttribute('aria-expanded', String(isOpen));
}

document.addEventListener('click', (event) => {
  const container = document.querySelector('.more-works-container');
  if (container && !container.contains(event.target)) {
    document.getElementById('moreWorksDropdown')?.classList.remove('show');
    const button = document.querySelector('.more-works-btn');
    button?.classList.remove('active');
    button?.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.getElementById('moreWorksDropdown')?.classList.remove('show');
    const button = document.querySelector('.more-works-btn');
    button?.classList.remove('active');
    button?.setAttribute('aria-expanded', 'false');
  }
});

async function copyBibTeX() {
  const code = document.getElementById('bibtex-code');
  const button = document.querySelector('.copy-bibtex-btn');
  const label = button?.querySelector('.copy-text');
  if (!code || !button || !label) return;

  try {
    await navigator.clipboard.writeText(code.textContent);
  } catch (_) {
    const textArea = document.createElement('textarea');
    textArea.value = code.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }

  button.classList.add('copied');
  label.textContent = 'Copied';
  window.setTimeout(() => {
    button.classList.remove('copied');
    label.textContent = 'Copy';
  }, 2000);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  document.querySelector('.scroll-to-top')?.classList.toggle('visible', window.scrollY > 300);
});
