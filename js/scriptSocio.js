
document.querySelectorAll('.barra span').forEach(barra => {
  const valor = barra.style.getPropertyValue('--valor');
  barra.style.width = valor;
});

//Usuario menu

const toggleBtn = document.getElementById('menuToggle');
const userPanel = document.querySelector('.user-panel');

toggleBtn.addEventListener('click', () => {
    userPanel.classList.toggle('open');
});