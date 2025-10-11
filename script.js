
// Este script maneja la interacción (hover) para la traducción y el sonido.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar todas las palabras clave (etiquetas <strong>)
    const keywords = document.querySelectorAll('#glitch-container strong');
    // 2. Seleccionar el elemento de audio
    const audio = document.getElementById('glitch-audio');

    keywords.forEach(keyword => {
        // Guardar el texto original de la palabra
        const originalText = keyword.textContent;
        // Obtener la traducción desde el atributo 'data-translation'
        const translation = keyword.getAttribute('data-translation');
        
        // OPCIONAL: Debugging para confirmar que lee el valor
        // console.log(`Original: ${originalText}, Traducción: ${translation}`);

        // ** Evento: Al pasar el cursor sobre la palabra (MOUSEOVER) **
        keyword.addEventListener('mouseover', () => {
            if (translation) {
                // CORRECCIÓN: Usar la traducción si existe
                keyword.textContent = translation; 
            }
            ------------------------------------------------------
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
          
            
            ------------------------------------------------------
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
