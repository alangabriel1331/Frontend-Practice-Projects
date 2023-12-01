const izq = document.querySelector('.izquierdo')
const der = document.querySelector('.derecho')
const container = document.querySelector('.container')

izq.addEventListener('mouseenter', () => container.classList.add('hover-izquierdo'))
izq.addEventListener('mouseleave', () => container.classList.remove('hover-izquierdo'))

der.addEventListener('mouseenter', () => container.classList.add('hover-derecho'))
der.addEventListener('mouseleave', () => container.classList.remove('hover-derecho'))