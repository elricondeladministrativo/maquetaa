// Usuario y contraseña correctos
const usuarioCorrecto = "Mario";
const passwordCorrecta = "Mario";

// Evento para capturar el login
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuarioIngresado = document.getElementById('usuario').value.trim();
    const passwordIngresada = document.getElementById('password').value.trim();

    if (usuarioIngresado === usuarioCorrecto && passwordIngresada === passwordCorrecta) {
        alert('✅ Bienvenido.');
        window.location.href = "menu_principal.html";
    } else {
        document.getElementById('error').textContent = "Usuario o contraseña incorrectos.";
        document.getElementById('formLogin').reset();
    }
});
