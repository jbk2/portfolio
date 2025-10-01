const THEME_KEY = 'theme';

export function getLocalThemePreference() {
  return sessionStorage.getItem(THEME_KEY);
};

export function storeLocalThemePreference(preference) {
  sessionStorage.setItem(THEME_KEY, preference)
}

export function getSystemTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
    return 'dark'
  } else {
    return 'light'
  }
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  window.dispatchEvent(new CustomEvent('themeChange', { detail: theme }));
};

export function initSystemThemeSync() {
  if (typeof window === 'undefined' || !window.matchMedia) return;
  // Avoid double-binding during HMR
  if (window.__jbkThemeSynced) return;
  window.__jbkThemeSynced = true;

  const localTheme = getLocalThemePreference();
  const systemTheme = getSystemTheme();

  applyTheme(localTheme ?? systemTheme);

  listenForSystemThemeChange();
}
  
function listenForSystemThemeChange() {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const onChange = (e) => {
    sessionStorage.removeItem('theme');
    applyTheme(e.matches ? 'dark' : 'light');
  };

  mq.addEventListener('change', onChange);
}
