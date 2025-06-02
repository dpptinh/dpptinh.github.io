// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => btn.classList.add('hovered'));
      btn.addEventListener('mouseleave', () => btn.classList.remove('hovered'));
    });
  });
  