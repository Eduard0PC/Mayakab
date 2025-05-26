// Lista de usuarios predeterminados
let usuarios = [
    { usuario: "Angeles Olvera", contrasena: "1234" },
    { usuario: "Rodrigo Chi", contrasena: "2345" }
];

// Toggle entre login y registro
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Validación del formulario de inicio de sesión
const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = loginForm.querySelector('input[type="text"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();

    const userFound = usuarios.find(u => u.usuario === username && u.contrasena === password);

    if (userFound) {
        alert("Inicio de sesión exitoso");
        // Redirigir o mostrar contenido protegido aquí
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

// Registro de nuevo usuario
const registerForm = document.querySelector('.form-box.register form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = registerForm.querySelector('input[type="text"]').value.trim();
    const email = registerForm.querySelector('input[type="email"]').value.trim();
    const password = registerForm.querySelector('input[type="password"]').value.trim();

    const yaExiste = usuarios.some(u => u.usuario === username);

    if (yaExiste) {
        alert("El usuario ya existe");
    } else {
        usuarios.push({ usuario: username, contrasena: password });
        alert("Usuario registrado con éxito");
        registerForm.reset();
        container.classList.remove('active'); // Vuelve al login
    }
});
