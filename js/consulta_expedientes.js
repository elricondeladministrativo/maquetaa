// Variables globales
let expedienteSeleccionado = null; // Guardamos el expediente que buscamos

// Función para buscar un expediente
function buscarExpediente() {
    const buscarValor = document.getElementById('buscar_expediente').value.trim();

    if (buscarValor === '') {
        alert('Por favor, ingrese un número de Expediente o AP.');
        return;
    }

    // Simulamos búsqueda de expediente
    // (Después lo conectamos a SQL real)
    expedienteSeleccionado = {
        n_ex: "2024-0001",
        n_ap: "AP-12345",
        caratula: "Robo Agravado",
        estado_causa: "En trámite",
        personal_asignado: "Oficial Juan Pérez",
        ultimo_movimiento: {
            fecha: "2024-04-20",
            hora: "10:30",
            accion: "Declaración Testimonial",
            observaciones: "Sin novedades relevantes"
        }
    };

    mostrarExpediente();
    mostrarUltimoMovimiento();
    mostrarFormularioNuevaActuacion();
}

// Función para mostrar el expediente en la tabla
function mostrarExpediente() {
    const tablaBody = document.querySelector("#tabla_expedientes tbody");
    tablaBody.innerHTML = ''; // Limpiar tabla anterior

    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${expedienteSeleccionado.n_ex}</td>
        <td>${expedienteSeleccionado.n_ap}</td>
        <td>${expedienteSeleccionado.caratula}</td>
        <td>${expedienteSeleccionado.estado_causa}</td>
        <td>${expedienteSeleccionado.personal_asignado}</td>
        <td><button onclick="agregarNovedad()">Agregar Novedad</button></td>
    `;
    tablaBody.appendChild(fila);
}

// Función para mostrar el último movimiento
function mostrarUltimoMovimiento() {
    const contenedor = document.getElementById('ultimo_movimiento');
    const data = expedienteSeleccionado.ultimo_movimiento;

    contenedor.innerHTML = `
        <strong>Fecha:</strong> ${data.fecha} <br>
        <strong>Hora:</strong> ${data.hora} <br>
        <strong>Acción:</strong> ${data.accion} <br>
        <strong>Observaciones:</strong> ${data.observaciones}
    `;

    document.getElementById('ultimo_movimiento_container').style.display = 'block';
}

// Función para mostrar el formulario de nueva actuación
function mostrarFormularioNuevaActuacion() {
    document.getElementById('nueva_actuacion_container').style.display = 'block';
}

// Función cuando aprieto el botón "Agregar Novedad" en la tabla
function agregarNovedad() {
    // Hacemos visible el formulario para cargar actuación (ya lo teníamos mostrado)
    document.getElementById('nueva_actuacion_container').scrollIntoView({ behavior: 'smooth' });
}

// Función para guardar la nueva actuación
function guardarNuevaActuacion() {
    const fecha = document.getElementById('fecha_nueva').value;
    const hora = document.getElementById('hora_nueva').value;
    const accion = document.getElementById('accion_nueva').value.trim();
    const observaciones = document.getElementById('observaciones_nueva').value.trim();

    if (fecha === '' || hora === '' || accion === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    // Simulamos guardar la nueva actuación
    const nuevaActuacion = {
        fecha: fecha,
        hora: hora,
        accion: accion,
        observaciones: observaciones
    };

    console.log('✅ Nueva actuación registrada:', nuevaActuacion);

    alert('✅ Nueva actuación guardada correctamente.');

    // Actualizamos el último movimiento mostrado
    expedienteSeleccionado.ultimo_movimiento = nuevaActuacion;
    mostrarUltimoMovimiento();

    // Limpiamos el formulario
    document.getElementById('formNuevaActuacion').reset();
}
