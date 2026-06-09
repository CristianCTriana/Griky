(function () {
  function flipCard(container) {
    var card = container.querySelector('.flip-card');
    if (!card) return;
    card.classList.toggle('flipped');
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.flip-card-container').forEach(function (container) {
      container.setAttribute('tabindex', '0');

      container.addEventListener('click', function () {
        flipCard(container);
      });

      container.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          flipCard(container);
        }
      });
    });
  });
})();
document.addEventListener('DOMContentLoaded', () => {
  const cardWrappers = document.querySelectorAll('.def-card-wrapper');

  cardWrappers.forEach(wrapper => {
    const card = wrapper.querySelector('.def-card');
    const cardFront = wrapper.querySelector('.def-card-front');
    const cardBack = wrapper.querySelector('.def-card-back');

    if (!card || !cardFront || !cardBack) return;

    // Calcular si el título es largo (más de 60 caracteres)
    const title = cardFront.querySelector('h3');
    const titleLength = title ? title.textContent.length : 0;
    
    if (titleLength > 60) {
      wrapper.classList.add('wide-card');
    }

    // Ajustar altura inicial basada en el frente
    const frontHeight = cardFront.scrollHeight;
    card.style.minHeight = `${Math.max(frontHeight, 220)}px`;

    wrapper.addEventListener('click', () => {
      const isFlipping = !card.classList.contains('is-flipped');
      
      if (isFlipping) {
        // Al voltear: ajustar al contenido del reverso con un poco más de padding
        setTimeout(() => {
          const backHeight = cardBack.scrollHeight;
          card.style.minHeight = `${backHeight + 20}px`;
        }, 50);
      } else {
        // Al devolver: ajustar al contenido del frente
        const frontHeight = cardFront.scrollHeight;
        card.style.minHeight = `${Math.max(frontHeight, 220)}px`;
      }
      
      card.classList.toggle('is-flipped');
    });
  });
});



