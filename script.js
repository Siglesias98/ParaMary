document.addEventListener("DOMContentLoaded", function() {
    // Función para deslizar suavemente hacia la sección de la flor
    function deslizarPagina() {
        document.getElementById("imagen-flor").scrollIntoView({ behavior: "smooth" });
    }

    // Agregar el event listener al botón para ejecutar la función cuando se haga clic
    document.querySelector(".boton").addEventListener("click", deslizarPagina);
});
