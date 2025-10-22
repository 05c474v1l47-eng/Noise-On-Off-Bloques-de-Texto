// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Obtener todas las palabras marcadas con <strong>
    const glitchWords = document.querySelectorAll('strong');
    
    // 2. Crear el objeto de audio (el JS lo crea, sin depender de IDs en HTML)
    // Asegúrate de que el archivo 'noise.mp3' esté en la misma carpeta.
    const noiseAudio = new Audio('noise.mp3'); 

    glitchWords.forEach(word => {
        
        // 3. Guardar el texto original (el cifrado: DESOLACIÓN, SOLLOZA, etc.)
        const originalText = word.textContent;

        // ** Evento al entrar el ratón (mouseover) **
        word.addEventListener('mouseover', () => {
            
            // A. Muestra el texto de la traducción (VACÍO, FIN, SOLOZA, etc.)
            word.textContent = word.getAttribute('data-translation'); 
            
            // B. Reproduce el audio
            noiseAudio.currentTime = 0;
            // Play() debe ser envuelto en catch para evitar errores de Promise no manejados
            noiseAudio.play().catch(e => {}); 
        });

        // ** Evento al salir el ratón (mouseout) **
        word.addEventListener('mouseout', () => {
            
            // A. Restaura el texto original (DESOLACIÓN, SOLLOZA, etc.)
            word.textContent = originalText;
            
            // B. Detiene el audio
            noiseAudio.pause();
        });
    });
});
