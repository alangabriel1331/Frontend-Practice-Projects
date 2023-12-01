const open = document.getElementById('abrir')
const close = document.getElementById('cerrar')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))