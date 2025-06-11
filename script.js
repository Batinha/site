const btnLupa = document.querySelector('.lupa');

btnLupa.addEventListener('click', () => {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  btnLupa.appendChild(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
});

const inputBox = document.getElementById('caixa-input');

btnLupa.addEventListener('click', () => {
  inputBox.classList.toggle('show');
  if (inputBox.classList.contains('show')) {
    inputBox.focus();
  }
});