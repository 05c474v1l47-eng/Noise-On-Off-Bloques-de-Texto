// Este script maneja la interacción (hover) para la traducción y el sonido.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar todas las palabras clave (etiquetas <strong>)
    const keywords = document.querySelectorAll('#glitch-container strong');
    // 2. Seleccionar el elemento de audio
    const audio = document.getElementById('glitch-audio');

    keywords.forEach(keyword => {
        // Guardar el texto original (el cifrado)
        const originalText = keyword.textContent;
        // Obtener la traducción desde el atributo 'data-translation'
        const translation = keyword.getAttribute('data-translation');
        
        // *** CRÍTICO: Guardar el texto original en un atributo para que el CSS lo use en el glitch ***
        keyword.setAttribute('data-original-text', originalText);
        // ******************************************************************************************

        // ** Evento: Al pasar el cursor sobre la palabra (MOUSEOVER) **
        keyword.addEventListener('mouseover', () => {
            if (translation) {
                // A. Muestra la traducción (cambiando el texto de la etiqueta principal)
                keyword.textContent = translation; 
            }
            
            // B. Reproduce el sonido
            if (audio) {
                audio.currentTime = 0; 
                audio.play().catch(e => {}); // Maneja si el navegador bloquea el autoplay
            }
        });

        // ** Evento: Al quitar el cursor (MOUSEOUT) **
        keyword.addEventListener('mouseout', () => {
            // A. Restaura el texto original (cifrado)
            keyword.textContent = originalText;
            
            // B. Pausa el sonido
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    });
});
