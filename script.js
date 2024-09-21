onload = () => {
    document.body.classList.remove("container");
  };

// Mantén el código que ya tienes y añade esto al final

document.addEventListener("DOMContentLoaded", () => {
  
  const originalContent = document.getElementById('original-content');
  const centerBox = document.getElementById('center-box');
  const body = document.body; // Para controlar las animaciones de fondo

  let isOriginalVisible = true;  // Estado inicial: el contenido original está visible

  function toggleVisibility() {
    if (isOriginalVisible) {
      // Ocultar el contenido original y mostrar la animación
      originalContent.classList.replace('visible', 'hidden');
      body.classList.add('no-animations');
      centerBox.classList.replace('hidden', 'visible');
      centerBox.style.opacity = 1;

      // Mostrar la animación durante 40 segundos
      setTimeout(() => {
        centerBox.classList.replace('visible', 'hidden');
        body.classList.remove('no-animations');
        originalContent.classList.replace('hidden', 'visible');
        centerBox.style.opacity = 0;
      }, 9400);  // Tiempo para que desaparezca la animación
    } else {
      // Mostrar la imagen durante 10 segundos
      setTimeout(() => {
        originalContent.classList.replace('hidden', 'visible');
        body.classList.add('no-animations');
        centerBox.classList.replace('visible', 'hidden');
        centerBox.style.opacity = 0;
      }, 1000);  // Tiempo para que desaparezca la imagen
    }

    isOriginalVisible = !isOriginalVisible;  // Cambia el estado
  }

  // Alternar cada 50 segundos (40 segundos de animación + 10 segundos de imagen)
  setInterval(toggleVisibility, 41000);
});