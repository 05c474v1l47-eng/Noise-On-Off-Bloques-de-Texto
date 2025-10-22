<script>
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos <strong> (las palabras clave)
    const strongElements = document.querySelectorAll('strong');
    // Selecciona el elemento de audio por su ID, que ahora carga 'noise.mp3'
    const glitchSound = document.getElementById('glitch-sound');
    
    // Función para reproducir el audio del glitch
    function playGlitchSound() {
        // Reinicia el audio a 0s para que se pueda reproducir inmediatamente en cada hover
        glitchSound.currentTime = 0; 
        // Intenta reproducir el sonido
        glitchSound.play().catch(e => {
            console.warn("Error al intentar reproducir el audio. Puede que el navegador lo haya bloqueado:", e);
        });
    }

    strongElements.forEach(strong => {
        // Almacena el texto original (Inglés/Glitch)
        const originalText = strong.textContent; 
        // Almacena la traducción (Español/Claro) del atributo data-translation
        const translatedText = strong.getAttribute('data-translation');
        
        // Manejar el evento HOVER (Muestra la traducción y reproduce el audio)
        strong.addEventListener('mouseenter', () => {
            strong.textContent = translatedText;
            playGlitchSound(); // 🎶 Esto activa el sonido al pasar el ratón
        });

        // Manejar el evento MOUSEOUT (Restaura el glitch)
        strong.addEventListener('mouseleave', () => {
            strong.textContent = originalText; 
        });
    });
});
</script>
