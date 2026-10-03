const reveals = document.querySelectorAll('.reveal');

function checkReveals() {
  const viewportHeight = window.innerHeight;

  reveals.forEach((reveal) => {
    const { top, bottom } = reveal.getBoundingClientRect();

    if (top < viewportHeight && bottom > 0) {
      reveal.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkReveals);
checkReveals();
