function palindromo(texto) {
    texto = texto.replace(/[$\.\(\_\-\:\/¿\?,;¡!]/g, " ").trim().split(" ").join("").toUpperCase()
    const r = texto.split("").reverse().join("");

    if (r == texto) {
        return true
    } else {
        return false;
    }
}


//instancias
let txt = document.querySelector("#txt")
let resultado = document.querySelector("#resultado")


txt.addEventListener("input", (e) => {
    if(palindromo(e.target.value)==true){
        textoResultado="es un palindromo 😁"
    }else{
        textoResultado="error, no es un palindromo ❌"
    }
    resultado.innerHTML=textoResultado
})


    //palindrome("0_0 (: /-\ :) 0-0");
    //palindrome("My age is 0, 0 si ega ym.");
    //palindrome("eye");