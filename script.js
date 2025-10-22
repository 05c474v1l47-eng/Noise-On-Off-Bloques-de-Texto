document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Obtener todas las palabras marcadas con <strong>
    const glitchWords = document.querySelectorAll('strong');
    
    // 2. Crear el objeto de audio (el JS lo crea, no necesita etiqueta en HTML)
    const noiseAudio = new Audio('noise.mp3'); 

    glitchWords.forEach(word => {
        
        // 3. Guardar el texto original (el cifrado)
        const originalText = word.textContent;

        // ** Evento al entrar el ratón (mouseover) **
        word.addEventListener('mouseover', () => {
            
            // A. Muestra el texto de la traducción
            // El CSS (con text-indent:0) lo hará visible
            word.textContent = word.getAttribute('data-translation'); 
            
            // B. Reproduce el audio
            noiseAudio.currentTime = 0;
            noiseAudio.play().catch(e => {
                 console.warn("La reproducción de audio fue bloqueada. Haz un primer clic en la página.");
            });
        });

        // ** Evento al salir el ratón (mouseout) **
        word.addEventListener('mouseout', () => {
            
            // A. Restaura el texto original (el cifrado)
            word.textContent = originalText;
            
            // B. Detiene el audio
            noiseAudio.pause();
        });
    });
});
