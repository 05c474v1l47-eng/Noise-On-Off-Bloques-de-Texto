// Este script maneja la interacción (hover) para la traducción y el sonido.

document.addEventListener('DOMContentLoaded', () => {
    const keywords = document.querySelectorAll('#glitch-container strong');
    const audio = document.getElementById('glitch-audio');

    keywords.forEach(keyword => {
        const originalText = keyword.textContent;
        const translation = keyword.getAttribute('data-translation');
        
        // ******* ¡LÍNEA CLAVE PARA EL GLITCH EN CSS! *******
        // El CSS usará este atributo para crear el efecto glitch por defecto.
        keyword.setAttribute('data-original-text', originalText); 

        // Evento: Al pasar el cursor (MOUSEOVER)
        keyword.addEventListener('mouseover', () => {
            if (translation) {
                // Muestra la traducción (JavaScript)
                keyword.textContent = translation; 
            }
            
            // Reproduce el sonido
            if (audio) {
                audio.currentTime = 0; 
                audio.play().catch(e => {});
            }
        });

        // Evento: Al quitar el cursor (MOUSEOUT)
        keyword.addEventListener('mouseout', () => {
            // Restaura el texto original
            keyword.textContent = originalText;
            
            // Pausa el sonido
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    });
});
