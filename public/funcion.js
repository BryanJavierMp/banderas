// Validación para el input del monto, solo permitiendo números
document.getElementById('monto').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9.]/g, ''); // Permite solo números y punto
});

// Función para realizar el cálculo del monto final
function calcularMontoFinal(plazoSeleccionado) {
    // Obtener el monto ingresado
    let monto = parseFloat(document.getElementById('monto').value.replace(',', '.'));

    if (isNaN(monto) || monto < 500 || monto > 100000000) {
        alert("Por favor, ingresa un monto válido entre $500 y $100,000,000.");
        return;
    }

    // Determinar el interés según si se seleccionan meses o días
    let interes = 0;
    let mensajeInteres = '';
    
    if (document.getElementById('meses').classList.contains('selected')) {
        interes = 0.063; // Interés de 6.30% para meses
        mensajeInteres = '6.30% en meses';
    } else if (document.getElementById('dias').classList.contains('selected')) {
        interes = 0.0455; // Interés de 4.55% para días
        mensajeInteres = '4.55% en días';
    }

    // Cálculo del monto final
    let montoFinal = monto * (1 + interes);
    
    // Mostrar el resultado en el contenedor de respuestas
    document.querySelector('.respuestas').innerHTML = `
        <p>El monto final a recibir es: $${montoFinal.toFixed(2)}</p>
        <p>Con interés de: ${mensajeInteres}</p>
    `;
}

// Selección de los botones "Meses" y "Días"
document.getElementById('meses').addEventListener('click', function() {
    // Mostrar los botones de Meses y ocultar los de Días
    document.getElementById('opciones-meses').style.display = 'flex';
    document.getElementById('opciones-dias').style.display = 'none';

    // Cambiar mensaje
    document.getElementById('mensaje-plazo').innerHTML = "Elige el plazo en meses de tu inversión";

    // Resaltar el botón "Meses"
    document.getElementById('meses').classList.add('selected');
    document.getElementById('dias').classList.remove('selected');
});

document.getElementById('dias').addEventListener('click', function() {
    // Mostrar los botones de Días y ocultar los de Meses
    document.getElementById('opciones-dias').style.display = 'flex';
    document.getElementById('opciones-meses').style.display = 'none';

    // Cambiar mensaje
    document.getElementById('mensaje-plazo').innerHTML = "Elige el plazo en días de tu inversión";

    // Resaltar el botón "Días"
    document.getElementById('dias').classList.add('selected');
    document.getElementById('meses').classList.remove('selected');
});

// Selección de los botones de plazo (12, 9, 6, etc.) y calcular el resultado
document.querySelectorAll('.opcion-btn').forEach(button => {
    button.addEventListener('click', function() {
        button.classList.toggle('selected');
        calcularMontoFinal();
    });
});
