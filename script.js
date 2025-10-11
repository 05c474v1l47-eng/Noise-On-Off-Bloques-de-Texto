// Este script maneja la interacción (hover) para la traducción y el sonido.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar todas las palabras clave (etiquetas <strong>)
    const keywords = document.querySelectorAll('#glitch-container strong');
    // 2. Seleccionar el elemento de audio
    const audio = document.getElementById('glitch-audio');

    keywords.forEach(keyword => {
        // Guardar el texto original de la palabra antes de modificarlo
        const originalText = keyword.textContent;
        // Obtener la traducción desde el atributo 'data-translation'
        const translation = keyword.getAttribute('data-translation');
        
        // ** Evento: Al pasar el cursor sobre la palabra (MOUSEOVER) **
        keyword.addEventListener('mouseover', () => {
            // Reemplazar el texto con la traducción
            keyword.textContent = translation;
            
            // Reproducir el sonido
            if (audio) {
                // Reiniciar el audio al principio por si ya estaba sonando
                audio.currentTime = 0; 
                audio.play().catch(e => {
                    // La promesa falla si el navegador bloquea el auto-play
                    // console.error("Error al reproducir el audio:", e);
                });
            }
        });

        // ** Evento: Al quitar el cursor de la palabra (MOUSEOUT) **
        keyword.addEventListener('mouseout', () => {
            // Restaurar el texto original
            keyword.textContent = originalText;
            
            // Pausar el sonido
            if (audio) {
                audio.pause();
                audio.currentTime = 0; // Opcional: reiniciar para el próximo hover
            }
        });
        
        // ** (Opcional) Guardar el texto original como un atributo por si acaso **
        // Esto ayuda a mantener el estado en caso de que el CSS esté alterando textContent
        keyword.setAttribute('data-original-text', originalText);
    });
    
    // NOTA SOBRE EL AUDIO:
    // Los navegadores modernos a menudo bloquean la reproducción de audio 
    // si no hay una interacción previa del usuario con la página (clic).
    // Si el audio no funciona, es posible que debas añadir un botón 
    // de "Iniciar Experimento" que lo active inicialmente.
});
