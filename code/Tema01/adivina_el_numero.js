var numeroSecreto = Math.trunc(Math.random() * 20) + 1;
var intentos = 7;
var logrado = 0;

function adivinaNumero(numero, vidas, logrado) {
    while(true){
        vidas=vidas-1
        logrado += 1
        var usuario = prompt("Pense un numero entre el 1 y el 20. ¿Cual es?")
        if(usuario == 0 ) {
            break
        }
        else if(vidas == 0 ){
            alert("has perdido")
            break
        }
        else if(usuario == numero){ 
            alert("Has ganado al intento" +logrado)
            break
        }
        else if(usuario < numero){
            alert("El numero es menor, vuelve a intentarlo")
        }
        else if(usuario > numero){
            alert("El numero es mayor, vuelve a intentarlo")
        }
    }
}
adivinaNumero(numeroSecreto, intentos, logrado)