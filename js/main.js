// Lista de usuarios predeterminados con roles
let usuarios = [
    { usuario: "Angeles Olvera", contrasena: "1234", rol: "socio" },
    { usuario: "Rodrigo Chi", contrasena: "1234", rol: "usuario" }
];

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

    const inputs = loginForm.querySelectorAll('input');
    const username = inputs[0].value.trim();
    const password = inputs[1].value.trim();

    const userFound = usuarios.find(u => u.usuario === username && u.contrasena === password);

    if (userFound) {
        alert("Inicio de sesión exitoso");

        // Redirigir según el rol
        if (userFound.rol === "usuario") {
            window.location.href = "html/home.html";
        } else if (userFound.rol === "socio") {
            window.location.href = "html/socio/home.html";
        }
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

// Registro de nuevo usuario (siempre con rol "socio") 
const registerForm = document.querySelector('.form-box.register form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = registerForm.querySelectorAll('input');
    const username = inputs[0].value.trim();
    const email = inputs[1].value.trim(); // validación básica, aunque no se usa
    const password = inputs[2].value.trim();

    const yaExiste = usuarios.some(u => u.usuario === username);

    if (yaExiste) {
        alert("El usuario ya existe");
    } else {
        usuarios.push({ usuario: username, contrasena: password, rol: "socio" }); // rol fijo
        alert("Usuario registrado con éxito");
        registerForm.reset();
        container.classList.remove('active'); // Vuelve al login
    }
});
