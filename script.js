document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Obtener todas las palabras marcadas con <strong>
    const glitchWords = document.querySelectorAll('strong');
    
    // 2. Crear el objeto de audio 
    // Asegúrate de tener el archivo 'noise.mp3' en la misma carpeta.
    const noiseAudio = new Audio('noise.mp3'); 
    noiseAudio.loop = true; // El audio se repite
    
    // **NOTA IMPORTANTE SOBRE EL AUDIO:** // Los navegadores modernos bloquean la reproducción automática.
    // El usuario debe interactuar con la página (hacer un primer clic)
    // para que el audio funcione.

    glitchWords.forEach(word => {
        
        // 3. Guardar el texto original (la palabra sin glitch)
        const originalText = word.textContent;

        // Evento al entrar el ratón (mouseover)
        word.addEventListener('mouseover', () => {
            
            // A. Activa el efecto visual (añade la clase CSS)
            word.classList.add('glitch');
            
            // B. Muestra el texto de la traducción como texto principal
            // El CSS (en la clase .glitch) hará que este texto sea invisible, pero es necesario
            // para que los pseudo-elementos ::before/::after puedan tomar su valor (content: attr(data-translation);)
            word.textContent = word.getAttribute('data-translation'); 
            
            // C. Intenta reproducir el audio
            noiseAudio.currentTime = 0;
            noiseAudio.play().catch(e => {
                // Este mensaje aparecerá si el navegador bloquea el audio
                console.warn("La reproducción de audio fue bloqueada. Haz un primer clic en la página para activarla.");
            });
        });

        // Evento al salir el ratón (mouseout)
        word.addEventListener('mouseout', () => {
            
            // A. Desactiva el efecto visual
            word.classList.remove('glitch');
            
            // B. Restaura el texto original (el ilegible)
            word.textContent = originalText;
            
            // C. Detiene el audio
            noiseAudio.pause();
        });
    });
});
