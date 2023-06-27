let numero;

do {
    numero = Number(prompt("Tengo los ojos tapados. Elija un numero entero entre 1 y 3\nElija bien, porque voy a adivinarlo!"));

    if(isNaN(numero)) {
        alert("Ha introducido una letra o texto\nPor favor introduzca un caracter valido");

    } else if(!Number.isInteger(numero)) {
        alert("Ha introducido un numero no entero\nPor favor introduzca un caracter valido");

    } else if(numero < 1 || numero > 3) {
        alert("Ha introducido un numero que no cumple los requisitos\nPor favor introduzca un caracter valido");

    }

} while(numero != 1 && numero != 2 && numero != 3);

alert("Mis ojos estan destapados y ya puedo leerte la mente")

let respuesta;
do {
    respuesta = prompt("Su numero es el 1? Escriba si o no");

    if(respuesta.toLowerCase() == "si") {
        alert("A la primera! Muy facil...");

    } else if(respuesta.toLowerCase() == "no"){
        respuesta = prompt("Su numero es el 2? Escriba si o no");
        
        if(respuesta.toLowerCase() == "si") {
            alert("A la segunda... Estuvo facil");
            
        } else if(respuesta.toLowerCase() == "no") {
            respuesta = prompt("Lo tengo! Es el 3");
            
            if(respuesta == "si") {
                alert("Siempre gano!");

            } else if(respuesta == "no") {
                alert("Felicitaciones! Es usted un tramposo!");


            } else {
                alert("Su respuesta no es valida");

            }
            
        } else {
            alert("Su respuesta no es valida");

        }

    } else {
        alert("Su respuesta no es valida");

    } 

} while(respuesta.toLowerCase() != "si")
