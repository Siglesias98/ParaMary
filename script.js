document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("boton");
    const imagenFlor = document.getElementById("imagen-flor");

    boton.addEventListener("click", function() {
        // Deslizar hacia abajo
        imagenFlor.scrollIntoView({ behavior: "smooth" });
        
        // Mostrar la imagen después de deslizar
        setTimeout(function() {
            imagenFlor.style.display = "flex";
        }, 500); // Ajusta el tiempo de retraso si es necesario
    });
});
