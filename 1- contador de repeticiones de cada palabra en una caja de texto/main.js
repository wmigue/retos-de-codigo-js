//CONSIGNA: contar cuantas veces se repite una palabra en la caja de texto.


let txt = document.getElementById("txt")
txt.addEventListener("input", (e) => {

    let texto = e.target.value
    texto=texto.replace(/[$\.¿\?,;¡!]/g, " ") 
    texto=texto.replace(/\s+/g, " ").trim()
    texto=texto.toUpperCase()
    const palabras = texto.split(" ")
    const result = palabras.reduce((acc, word)=>{
        acc.filter(x=>x.word===word).length===0 ?
        acc.push({
            word: word, total: 1
        }) :
        acc.find(x=>x.word===word).total++
        return acc
    },[])
    console.log(result)

})


//ANOTACIONES
 
//con "$" le digo donde empieza la expresión regular. algunos caracteres como "." o "?" son palabras reservadas, por lo que necesitamos precederlas de "\?" o "\." por ejemplo 

///con esto: \s+/g, " " reemplazo los espacios en blanco que existan por un solo espacio.