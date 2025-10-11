// Este script maneja la interacción (hover) para la traducción y el sonido.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar todas las palabras clave (etiquetas <strong>)
    const keywords = document.querySelectorAll('#glitch-container strong');
    // 2. Seleccionar el elemento de audio (DEBE usar el ID 'glitch-audio')
    const audio = document.getElementById('glitch-audio');

    keywords.forEach(keyword => {
        // Guardar el texto original (el código cifrado)
        const originalText = keyword.textContent;
        // Obtener la traducción desde el atributo 'data-translation'
        const translation = keyword.getAttribute('data-translation');
        
        // ** Evento: Al pasar el cursor sobre la palabra (MOUSEOVER) **
        keyword.addEventListener('mouseover', () => {
            // A. Cambiar el texto a la traducción
            if (translation) {
                keyword.textContent = translation; 
            }
            
            // B. Reproducir el sonido
            if (audio) {
                // Reiniciar el audio al principio para que suene cada vez
                audio.currentTime = 1; 
                
                // Intenta reproducir. El catch maneja si el navegador lo bloquea.
                audio.play().catch(e => {
                    // console.error("Error al reproducir el audio, puede ser por restricción del navegador:", e);
                });
            }
        });

        // ** Evento: Al quitar el cursor de la palabra (MOUSEOUT) **
        keyword.addEventListener('mouseout', () => {
            // A. Restaurar el texto original
            keyword.textContent = originalText;
            
            // B. Pausar el sonido
            if (audio) {
                audio.play();
                audio.currentTime = 0;
            }
        });
    });
});
