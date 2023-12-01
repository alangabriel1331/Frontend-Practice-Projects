const progreso = document.getElementById('progreso')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circulo = document.querySelectorAll('.circulo')

let activo = 1

next.addEventListener('click', () => {
    activo++

    if(activo > circulo.length){
        activo = circulo.length
    }
    update()
})

prev.addEventListener('click', () => {
    activo--

    if(activo < 1){
        activo = 1
    }
    update()
})

function update(){
    circulo.forEach((circulo, idx) =>{
        if (idx < activo){
            circulo.classList.add('activo')
        }
        else{
            circulo.classList.remove('activo')
        }
    })
    const activos = document.querySelectorAll('.activo')

    progreso.style.width = (activos.length-1)/(circulo.length-1)*100+'%'

    if(activo===1){
        prev.disabled = true
    }
    else if(activo === circulo.length){
        next.disabled = true
    }
    else{
        prev.disabled = false
        next.disabled = false
    }


}