export const themeScript = `
  (function() {
    // Check localStorage
    const storedTheme = localStorage.getItem('theme');
    // Check OS preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })()
`;
