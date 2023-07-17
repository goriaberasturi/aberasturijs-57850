const calculos = ['Sumar', 'Restar', 'Multiplicar', 'Dividir', 'Iterar suma'];
let calcEntry;
let resultado = 0;
let numeros;
let respuesta;

function rango(inicio, fin) {
    let array = [];

    for(let i = inicio; i <= fin; i++) {
        array.push(i);
    }

    return array;
}

class operar {
    constructor(x, y) {
        this.num1 = x;
        this.num2 = y;
    }

    sumar() {
        return this.num1 + this.num2;
    }
    
    restar() {
        return this.num1 - this.num2;
    }
    
    multiplicar() {
        return this.num1 * this.num2;
    }
    
    dividir() {
        if(this.num2 == 0) {
            alert('Error! La division por cero no esta definida');
        } else {
            return this.num1 / this.num2;
        }
    }

    itSuma() {
        if(this.num1 < this.num2) {
            let rangoIterado = rango(this.num1, this.num2);

            rangoIterado.forEach(item => {resultado += Number(item)});            
        } else {

            let rangoIterado = rango(this.num2, this.num1);
            
            rangoIterado.forEach(item => {resultado += item});
        }

        return resultado;
    }
}

function preguntaOp() {
    alert('Usted selecciono la opcion: ' + calculos[calcEntry]);

    do {
        num1 = Number(prompt('Introduzca el primer numero:'));
    } while (isNaN(num1));

    do {
        num2 = Number(prompt('Introduzca el segundo numero:'));
    } while (isNaN(num2));

    numeros = new operar(num1, num2);
}

do {
    do {
        calcEntry = Number(prompt('Elija un calculo a realizar:' +
                                '\n[0] - ' + calculos[0] +
                                '\n[1] - ' + calculos[1] +
                                '\n[2] - ' + calculos[2] +
                                '\n[3] - ' + calculos[3] +
                                '\n[4] - ' + calculos[4]
                                )
        );
    
        if (!rango(0, calculos.length-1).includes(calcEntry)) {
            alert('La opcion seleccionada no existe');
        }
    } while (!rango(0, calculos.length-1).includes(calcEntry));

    preguntaOp();

    switch(calcEntry) {
        case 0:
            alert('El resultado de la suma es: ' + numeros.sumar());
            break;
    
        case 1:
            alert('El resultado de la resta es: ' + numeros.restar());
            break;
    
        case 2:
            alert('El resultado de la multiplicacion es: ' + numeros.multiplicar());
            break;
    
        case 3:
            alert('El resultado de la division es: ' + numeros.dividir());
            break;
    
        case 4:
            alert('El resultado de iterar este rango es: ' + numeros.itSuma());
            break;
    }
    console.log(resultado);
    resultado = 0;
    console.log(resultado);
    respuesta = confirm('Desea continuar con otro calculo?');
} while(respuesta);

