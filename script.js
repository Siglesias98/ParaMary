document.addEventListener("DOMContentLoaded", function() {
    // Función para deslizar hacia abajo
    function deslizarPagina() {
        document.getElementById("imagen-flor").scrollIntoView({ behavior: "smooth" });
        mostrarFlor(); // Mostrar la imagen después de deslizar
    }

    // Mostrar la imagen de la flor
    function mostrarFlor() {
        const imagenFlor = document.getElementById("imagen-flor");
        setTimeout(() => {
            imagenFlor.style.display = 'flex'; // Mostrar la imagen después de deslizar
        }, 500); // Delay de 500ms para asegurar que la página haya terminado de deslizarse
    }

    // Vinculación del botón a la función de deslizar
    document.querySelector(".boton").addEventListener("click", deslizarPagina);
});
