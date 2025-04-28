// Lista para almacenar los involucrados temporalmente
const involucrados = [];

// Función para buscar personal por legajo
function buscarPersonal() {
    const legajoBuscado = document.getElementById('buscar_legajo').value.trim();

    if (legajoBuscado === '') {
        alert('Por favor, ingrese un número de Legajo.');
        return;
    }

    // Aquí iría la conexión a la base de datos en producción.
    // Por ahora simulemos que traemos un resultado (después esto se conecta a la base).
    const resultadoSimulado = "Oficial L.P 15471 (DNI 4184566) Ramirez Juan";

    // Mostramos el resultado en el div
    document.getElementById('resultado_personal').innerText = resultadoSimulado;
}

// Función para agregar un involucrado a la lista
function agregarInvolucrado() {
    const personalSeleccionado = document.getElementById('resultado_personal').innerText;

    if (personalSeleccionado === '') {
        alert('Primero busque y seleccione un personal.');
        return;
    }

    // Agregamos el personal encontrado a la lista de involucrados
    involucrados.push(personalSeleccionado);
    actualizarListaInvolucrados();

    // Limpiamos los campos de búsqueda
    document.getElementById('buscar_legajo').value = '';
    document.getElementById('resultado_personal').innerText = '';
}

// Función para actualizar visualmente la lista de involucrados en la pantalla
function actualizarListaInvolucrados() {
    const ul = document.getElementById('lista_involucrados');
    ul.innerHTML = ''; // Limpiamos la lista anterior

    involucrados.forEach(function(persona) {
        const li = document.createElement('li');
        li.textContent = persona;
        ul.appendChild(li);
    });
}

// Función para guardar todo el expediente
function guardarExpediente() {
    // Capturamos todos los valores del formulario
    const expediente = {
        n_ex: document.getElementById('n_ex').value.trim(),
        n_ap: document.getElementById('n_ap').value.trim(),
        caratula: document.getElementById('caratula').value.trim(),
        asignado_a: document.getElementById('asignado_a').value.trim(),
        involucrados: involucrados.join(' | '),
        juzgado: document.getElementById('juzgado').value.trim(),
        estado_causa: document.getElementById('estado_causa').value.trim(),
        fecha_inicio: document.getElementById('fecha_inicio').value,
        lugar_hecho: document.getElementById('lugar_hecho').value.trim(),
        fecha_hecho: document.getElementById('fecha_hecho').value,
        modalidad: document.getElementById('modalidad').value,
        policial_herido: document.getElementById('policial_herido').value.trim(),
        civil_herido: document.getElementById('civil_herido').value.trim(),
        elemento: document.getElementById('elemento').value.trim(),
        ubicacion_elemento: document.getElementById('ubicacion_elemento').value.trim(),
        dependencia: document.getElementById('dependencia').value.trim(),
        situacion: document.getElementById('situacion').value,
        observaciones: document.getElementById('observaciones').value.trim()
    };

    // Validamos que no falte nada obligatorio
    if (expediente.n_ex === '' || expediente.caratula === '' || expediente.asignado_a === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    console.log('Datos a guardar:', expediente);

    // En un proyecto real acá se haría la conexión para enviar los datos al servidor o a la API

    alert('✅ Expediente guardado correctamente.');
    limpiarFormulario();
}

// Función para limpiar todo el formulario
function limpiarFormulario() {
    document.getElementById('formExpediente').reset();
    involucrados.length = 0;
    actualizarListaInvolucrados();
}
