export function initSystemThemeSync() {
  if (typeof window === 'undefined' || !window.matchMedia) return;

  // Avoid double-binding during HMR
  if (window.__jbkThemeSynced) return;
  window.__jbkThemeSynced = true;

  const mq = window.matchMedia('(prefers-color-scheme: dark)');

  const applyTheme = () => {
    document.documentElement.setAttribute('data-theme', mq.matches ? 'dark' : 'light');
  };

  applyTheme();

  if (mq.addEventListener) {
    mq.addEventListener('change', applyTheme);
  } else if ('onchange' in mq) {
    mq.onchange = applyTheme;
  } else {
    // @ts-ignore legacy Safari
    mq.addListener(applyTheme);
  }
}


