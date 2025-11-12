<script>
document.addEventListener('DOMContentLoaded', () => {
    const strongElements = document.querySelectorAll('strong');
    const glitchSound = document.getElementById('glitch-sound');
    
    // Función para reproducir el sonido (usada en el hover/touch)
    function playGlitchSound() {
        glitchSound.currentTime = 0; 
        glitchSound.play().catch(e => {
            console.warn("Error tratando de reproducir el audio:", e);
        });
    }

    // *** PASO CLAVE PARA MÓVIL: Desbloqueo de Audio ***
    const unlockAudio = () => {
        glitchSound.play().then(() => {
            glitchSound.pause();
            document.body.removeEventListener('click', unlockAudio);
            document.body.removeEventListener('touchstart', unlockAudio);
            console.log("Audio desbloqueado por interacción del usuario.");
        }).catch(e => {
            console.log("Audio aún bloqueado, esperando interacción...", e);
        });
    };

    document.body.addEventListener('click', unlockAudio);
    document.body.addEventListener('touchstart', unlockAudio);

    // *** Lógica de Glitch (Touch y Hover) ***
    strongElements.forEach(strong => {
        // Texto Glitch (Español) - lo que se ve por defecto.
        const spanishText = strong.getAttribute('data-translation');
        
        // Asumiendo que has renombrado 'textContent' a 'data-english' en el HTML
        const englishText = strong.getAttribute('data-english'); 
        
        // Nuevo: Texto Alemán
        const germanText = strong.getAttribute('data-german');

        // Inicialización: Muestra el texto GLITCH (Español) por defecto.
        strong.textContent = spanishText;

        // Función para elegir la traducción (50% Inglés, 50% Alemán)
        function getRandomTranslation() {
            // Genera un número aleatorio entre 0 y 1. Si es < 0.5, es inglés, si no, es alemán.
            if (Math.random() < 0.5) {
                return englishText;
            } else {
                return germanText;
            }
        }

        // 2. Evento para ESCRITORIO (MouseEnter)
        strong.addEventListener('mouseenter', () => {
            strong.textContent = getRandomTranslation(); // Revela Inglés o Alemán
            playGlitchSound(); 
        });
        
        // 3. Evento para MÓVIL (TouchStart)
        strong.addEventListener('touchstart', (e) => {
            e.preventDefault(); 
            strong.textContent = getRandomTranslation(); // Revela Inglés o Alemán
            playGlitchSound(); 
        });
        
        // 4. Al salir del cursor (MouseLeave - Escritorio): Restaura el Español (Glitch).
        strong.addEventListener('mouseleave', () => {
            strong.textContent = spanishText; 
        });
    });
});
</script>
