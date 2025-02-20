
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('themeButtonHidden') === 'true') {
    return;
  }
  
  const root = document.documentElement;
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  document.body.appendChild(themeToggle);
  

  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'hide-modal-overlay';
  
  const modal = document.createElement('div');
  modal.className = 'hide-modal';
  modal.innerHTML = `
        <h3>Hide Theme Toggle?</h3>
        <p>This will permanently hide the theme toggle button. To show it again, you'll need to clear your browser's cache for this website.</p>
        <div class="hide-modal-buttons">
            <button class="hide-modal-button cancel">Cancel</button>
            <button class="hide-modal-button confirm">Hide Button</button>
        </div>
    `;
  
  document.body.appendChild(modalOverlay);
  document.body.appendChild(modal);
  

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    themeToggle.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  

  let pressTimer;
  let pressStart;
  const longPressDuration = 800; 
  
  function handleThemeToggle() {
    const icon = themeToggle.querySelector('i');
    icon.classList.add('rotating');
  
    setTimeout(() => {
      if (root.getAttribute('data-theme') === 'dark') {
        root.removeAttribute('data-theme');
        themeToggle.classList.remove('dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
      } else {
        root.setAttribute('data-theme', 'dark');
        themeToggle.classList.add('dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
      }
      

      const newIcon = themeToggle.querySelector('i');
      newIcon.classList.add('rotating');
      

      setTimeout(() => {
        newIcon.classList.remove('rotating');
      }, 500);
    }, 250); 
  }
  
  function startPress(e) {
    if (e.type === 'touchstart') {
      e.preventDefault();
    }
    pressStart = Date.now();
    pressTimer = setTimeout(() => {
      modalOverlay.classList.add('active');
      modal.classList.add('active');
    }, longPressDuration);
  }
  
  function endPress(e) {
    if (e.type === 'touchend') {
      e.preventDefault();
    }
    const pressDuration = Date.now() - pressStart;
    clearTimeout(pressTimer);
     if (pressDuration < longPressDuration) {
      handleThemeToggle();
    }
  }
  

  themeToggle.addEventListener('mousedown', startPress);
  themeToggle.addEventListener('mouseup', endPress);
  themeToggle.addEventListener('mouseleave', () => clearTimeout(pressTimer));
  

  themeToggle.addEventListener('touchstart', startPress);
  themeToggle.addEventListener('touchend', endPress);
  themeToggle.addEventListener('touchcancel', () => clearTimeout(pressTimer));
  

  const cancelButton = modal.querySelector('.cancel');
  const confirmButton = modal.querySelector('.confirm');
  
  cancelButton.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    modal.classList.remove('active');
  });
  
  confirmButton.addEventListener('click', () => {
    localStorage.setItem('themeButtonHidden', 'true');
    themeToggle.remove();
    modalOverlay.classList.remove('active');
    modal.classList.remove('active');
  });
  
  modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    modal.classList.remove('active');
  });
});