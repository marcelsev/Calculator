let cifraA;
let cifraB;
let operacion;

function init (){
    // variables

    let resultado = document.getElementById("resultado");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let division = document.getElementById("division");
    let multiplicacion = document.getElementById("multiplicacion");
    let reset = document.getElementById("reset");
    let igual = document.getElementById("igual");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");

//eventos

uno.onclick =function (e){
    resultado.textContent= resultado.textContent +"1"
}
dos.onclick =function (e){
    resultado.textContent= resultado.textContent +"2"
}
tres.onclick =function (e){
    resultado.textContent= resultado.textContent +"3"
}
cuatro.onclick =function (e){
    resultado.textContent= resultado.textContent +"4"
}
cinco.onclick =function (e){
    resultado.textContent= resultado.textContent +"5"
}
seis.onclick =function (e){
    resultado.textContent= resultado.textContent +"6"
}
siete.onclick =function (e){
    resultado.textContent= resultado.textContent +"7"
}
ocho.onclick =function (e){
    resultado.textContent= resultado.textContent +"8"
}
nueve.onclick =function (e){
    resultado.textContent= resultado.textContent +"9"
}
cero.onclick =function (e){
    resultado.textContent= resultado.textContent +"0"
}

reset.onclick =function(e){
    resetear ();
}
suma.onclick =function (e){
 cifraA= resultado.textContent;
 operacion= "+";
 limpiar();
}
resta.onclick =function (e){
    cifraA= resultado.textContent;
    operacion= "-";
    limpiar();
   }
   division.onclick =function (e){
    cifraA= resultado.textContent;
    operacion= "/";
    limpiar();
   }
   multiplicacion.onclick =function (e){
    cifraA= resultado.textContent;
    operacion= "*";
    limpiar();
   }
   igual.onclick =function (e){
    cifraB= resultado.textContent;
    resolver();
   }

}
function limpiar(){
    resultado.textContent= "";
}

function resetear(){
    resultado.textContent = "";
    cifraA = 0;
    cifraB = 0;
    operacion= "";
}
function resolver(){
    let res = 0  ;
    switch(operacion){
        case"+":
        res = parseFloat(cifraA) + parseFloat(cifraB)
        break;
        case"-":
        res = parseFloat(cifraA) - parseFloat(cifraB)
        break;
        case"*":
        res = parseFloat(cifraA) * parseFloat(cifraB)
        break;
        case"/":
        res = parseFloat(cifraA) / parseFloat(cifraB)
        break;
    }
    resetear();
    resultado.textContent =res;
}