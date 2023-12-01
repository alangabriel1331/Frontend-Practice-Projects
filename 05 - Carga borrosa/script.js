const textoCarga = document.querySelector('.texto_carga')
const fondo = document.querySelector('.fondo')

let carga = 0

let int = setInterval(blurring, 30)

function blurring(){
    carga++

    if (carga > 99){
        clearInterval(int)
    }

    textoCarga.innerText = `${carga}%`
    textoCarga.style.opacity = scale(carga, 0, 100, 1, 0)
    fondo.style.filter = `blur(${scale(carga, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }