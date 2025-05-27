
document.querySelectorAll('.barra span').forEach(barra => {
  const valor = barra.style.getPropertyValue('--valor');
  barra.style.width = valor;
});

//Animacion
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
});

//Usuario menu

document.getElementById('menuToggle').addEventListener('click', () => {
    document.querySelector('.user-panel').classList.toggle('active');
});

//Editar valores

document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    // Aquí puedes enviar los datos al servidor con fetch/AJAX
    console.log("Datos actualizados:", { nombre, correo, contrasena });

    alert("Datos guardados correctamente.");
});

//editar imagen
document.getElementById("editOverlay").addEventListener("click", function () {
  document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profileImage").src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    alert("Por favor selecciona un archivo de imagen válido.");
  }
});
