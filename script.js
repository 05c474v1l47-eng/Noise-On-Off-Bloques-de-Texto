// Este script maneja la interacción (hover) para la traducción y el sonido.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener todas las palabras marcadas con <strong>
    const glitchWords = document.querySelectorAll('strong');
    
    // 2. Crear el objeto de audio (solo una instancia)
    const noiseAudio = new Audio('noise.mp3'); 
    // noiseAudio.loop = true; // No lo necesitamos si lo reproducimos en cada hover
    
    glitchWords.forEach(word => {
        // 3. Guardar el texto original (el ilegible)
        const originalText = word.textContent;

        // ** Evento al entrar el ratón (mouseover) **
        word.addEventListener('mouseover', () => {
            
            // A. Muestra el texto de la traducción
            word.textContent = word.getAttribute('data-translation'); 
            
            // B. Intenta reproducir el audio
            noiseAudio.currentTime = 0;
            noiseAudio.play().catch(e => {
                 console.warn("La reproducción de audio fue bloqueada. Haz un primer clic en la página para activarla.");
            });
        });

        // ** Evento al salir el ratón (mouseout) **
        word.addEventListener('mouseout', () => {
            
            // A. Restaura el texto original (el ilegible)
            word.textContent = originalText;
            
            // B. Detiene el audio
            noiseAudio.pause();
        });
    });
});
