// Datos simulados de expedientes (en la realidad iría conectado a tu base de datos)
const expedientes = [
    {
        n_ex: "2024-0001",
        caratula: "Robo agravado",
        ultima_fecha: "2024-03-15"
    },
    {
        n_ex: "2024-0002",
        caratula: "Hurto simple",
        ultima_fecha: "2024-04-25"
    },
    {
        n_ex: "2024-0003",
        caratula: "Daño a propiedad",
        ultima_fecha: "2024-02-10"
    }
];

// Cuando carga la página, buscamos inactivos
document.addEventListener('DOMContentLoaded', function() {
    mostrarExpedientesInactivos();
});

// Función para calcular la diferencia de días
function calcularDias(fecha) {
    const fechaUltima = new Date(fecha);
    const hoy = new Date();
    const diferenciaMs = hoy - fechaUltima;
    const diferenciaDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
    return diferenciaDias;
}

// Función para mostrar expedientes con más de 30 días de inactividad
function mostrarExpedientesInactivos() {
    const tbody = document.querySelector("#tabla_inactivos tbody");
    tbody.innerHTML = '';

    expedientes.forEach(expediente => {
        const diasInactivos = calcularDias(expediente.ultima_fecha);

        if (diasInactivos > 30) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${expediente.n_ex}</td>
                <td>${expediente.caratula}</td>
                <td>${expediente.ultima_fecha}</td>
                <td>${diasInactivos} días</td>
            `;
            tbody.appendChild(fila);
        }
    });
}

// Función para descargar todos los expedientes
function descargarExpedientes() {
    const filas = expedientes.map(exp => {
        return `${exp.n_ex};${exp.caratula};${exp.ultima_fecha}`;
    });

    const contenido = "N° Expediente;Carátula;Última Fecha\n" + filas.join('\n');
    descargarArchivo('expedientes.csv', contenido);
}

// Función para descargar el historial (simulado)
function descargarHistorial() {
    const historial = [
        "N° Expediente;Fecha;Hora;Acción;Observaciones",
        "2024-0001;2024-03-15;10:30;Declaración testimonial;Sin novedades",
        "2024-0003;2024-02-10;11:00;Inspección ocular;Puerta forzada"
    ];

    const contenido = historial.join('\n');
    descargarArchivo('historial.csv', contenido);
}

// Función general para descargar archivos
function descargarArchivo(nombreArchivo, contenido) {
    const blob = new Blob([contenido], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = nombreArchivo;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
