<script>
document.addEventListener('DOMContentLoaded', () => {
    const strongElements = document.querySelectorAll('strong');
    const glitchSound = document.getElementById('glitch-sound');
    
    // Función para reproducir el audio del glitch
    function playGlitchSound() {
        // Reinicia el audio para que se pueda reproducir en repetición rápida
        glitchSound.currentTime = 0;
        // Intenta reproducir el sonido
        glitchSound.play().catch(e => {
            console.warn("Error tratando de reproducir el audio, quizás aún bloqueado:", e);
        });
    }

    // *** PASO CLAVE PARA MÓVIL: Desbloqueo de Audio ***
    const unlockAudio = () => {
        // Intenta reproducir y pausar inmediatamente el audio al primer click/touch
        glitchSound.play().then(() => {
            glitchSound.pause();
            // Si funciona, se eliminan los listeners de desbloqueo
            document.body.removeEventListener('click', unlockAudio);
            document.body.removeEventListener('touchstart', unlockAudio);
        }).catch(e => {
            // Si falla, el listener se mantiene hasta la próxima interacción.
        });
    };

    // Añade listeners al body. El primer clic/toque desbloquea el audio.
    document.body.addEventListener('click', unlockAudio);
    document.body.addEventListener('touchstart', unlockAudio);

    // *** Lógica Principal: Cambia el texto y reproduce el sonido ***
    strongElements.forEach(strong => {
        // Texto Claro (Inglés) - lo que se ve por defecto en el HTML original.
        const englishText = strong.textContent; 
        // Texto Glitch (Español) - lo que se REVELA.
        const spanishText = strong.getAttribute('data-translation');
        
        // Inicialización: Muestra el texto GLITCH (Español) por defecto al cargar la página.
        strong.textContent = spanishText;

        // 2. Evento para ESCRITORIO (MouseEnter)
        strong.addEventListener('mouseenter', () => {
            strong.textContent = englishText; // Revela INGLÉS
            playGlitchSound(); // 🎶 Activa el sonido
        });
        
        // 2. Evento para MÓVIL (TouchStart)
        strong.addEventListener('touchstart', (e) => {
            e.preventDefault(); 
            strong.textContent = englishText; // Revela INGLÉS
            playGlitchSound(); // 🎶 Activa el sonido
        });
        
        // 3. Al salir del cursor (MouseLeave - Escritorio): Restaura el Español (Glitch).
        strong.addEventListener('mouseleave', () => {
            strong.textContent = spanishText; 
        });
    });
});
</script>
