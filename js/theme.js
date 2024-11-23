document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.theme-toggle-button');

  let currentMode = localStorage.getItem('mode');

  if (!currentMode) {
    currentMode = 'light';
    localStorage.setItem('mode', currentMode);
  }

  applyMode(currentMode);

  toggleButton.addEventListener('click', function () {
    currentMode = currentMode === 'dark' ? 'light' : 'dark';
    localStorage.setItem('mode', currentMode);
    applyMode(currentMode);
  });

  function applyMode(mode) {
    document.documentElement.setAttribute('data-mode', mode);

    const lightToggleIcon = toggleButton.querySelector('.lightToggleIcon');
    const darkToggleIcon = toggleButton.querySelector('.darkToggleIcon');

    lightToggleIcon.style.display = mode === 'light' ? 'block' : 'none';
    darkToggleIcon.style.display = mode === 'dark' ? 'block' : 'none';

    const selectElement = document.querySelector('select');
    selectElement.classList.toggle('dark-mode', mode === 'dark');
    selectElement.classList.toggle('light-mode', mode === 'light');
  }

});
