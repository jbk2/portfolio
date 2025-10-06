const THEME_KEY = 'theme';

export function getSessionThemePreference() {
  return sessionStorage.getItem(THEME_KEY);
}

export function getSystemThemePreference() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
    return 'dark'
  } else {
    return 'light'
  };
}

export function getDataTheme() {
  return document.documentElement.getAttribute('data-theme');
}

export function storeSessionThemePreference(preference) {
  sessionStorage.setItem(THEME_KEY, preference);
}

export function applyDataTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  window.dispatchEvent(new CustomEvent('themeChange', { detail: theme }));
}

export function initSystemThemeSync() {
  if (typeof window === 'undefined' || !window.matchMedia) return;
  // Avoid double-binding during HMR
  if (window.__jbkThemeSynced) return;
  window.__jbkThemeSynced = true;

  const sessionTheme = getSessionThemePreference();
  const systemThemePreference = getSystemThemePreference();

  applyDataTheme(sessionTheme ?? systemThemePreference);

  listenForSystemThemePreferenceChange();
}
  
function listenForSystemThemePreferenceChange() {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const onChange = (e) => {
    sessionStorage.removeItem('theme');
    applyDataTheme(e.matches ? 'dark' : 'light');
  };

  mq.addEventListener('change', onChange);
}
