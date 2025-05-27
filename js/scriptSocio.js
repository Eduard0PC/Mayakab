
document.querySelectorAll('.barra span').forEach(barra => {
  const valor = barra.style.getPropertyValue('--valor');
  barra.style.width = valor;
});
