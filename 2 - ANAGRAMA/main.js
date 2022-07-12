let res = ""
const isAnagrama = (array, buscada) => {
    array = array.split(",")
    //console.log(array)
    buscada = buscada.toUpperCase()
    for (let e of array) {
        e = e.toUpperCase()
        const p1 = e.split("").sort().join("")
        const p2 = buscada.split("").sort().join("")
        if (p1 == p2) {
            res += (`<br> La palabra: ${e} es anagrama de: ${buscada}`)
        }
    }
    return res
}


const array = document.querySelector("#array")
const buscada = document.querySelector("#buscada")
const boton = document.querySelector("#buscar")
const resultado = document.querySelector(".resultado")



//ejecucion
boton.addEventListener("click", () => {
    resultado.innerHTML = isAnagrama(array.value, buscada.value)
})


