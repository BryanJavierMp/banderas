<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulador de Crédito</title>
    <link rel="stylesheet" href="public/styles.css">
</head>
<body>
    <div class="container">
        <div class="simulador">
            <label for="monto">Ingresa el Monto a invertir</label>
            <input type="text" id="monto" placeholder="$0,00" class="input-monto">
            
            <p class="descripcion">Podrás invertir entre $500 a 100,000,000</p>
            
            <div class="plazo">
                <strong>Seleccionar el tipo de plazo</strong>
                <div class="botones-plazo">
                    <button id="meses" class="plazo-btn">Meses</button>
                    <button id="dias" class="plazo-btn">Días</button>
                </div>

                <div class="mensaje-plazo" id="mensaje-plazo">
                    <!-- Este mensaje cambia dinámicamente en el JS -->
                </div>

                <div class="opciones" id="opciones-meses" style="display: none;">
                    <button class="opcion-btn">12</button>
                    <button class="opcion-btn">9</button>
                    <button class="opcion-btn">6</button>
                    <button class="opcion-btn" id="otro-meses">
                        <span class="icono-lapiz">✎</span> Otro plazo
                    </button>
                </div>

                <div class="opciones" id="opciones-dias" style="display: none;">
                    <button class="opcion-btn">91</button>
                    <button class="opcion-btn">61</button>
                    <button class="opcion-btn">31</button>
                    <button class="opcion-btn" id="otro-dias">
                        <span class="icono-lapiz">✎</span> Otro plazo
                    </button>
                </div>
            </div>

            <div class="respuestas">
                <!-- Aquí irán las respuestas o cálculos -->
            </div>

            <div class="boton-container">
                <button class="invertir-btn">Invertir ahora</button>
            </div>
        </div>
    </div>

    <script src="public/funcion.js"></script>
</body>
</html>
