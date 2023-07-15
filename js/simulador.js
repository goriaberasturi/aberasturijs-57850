const calculos = ['Sumar', 'Restar', 'Multiplicar', 'Dividir'];
let calcEntry;
let num1;
let num2;
let resultado;

function sumar(x, y) {
    return x + y;
}

function restar(x, y) {
    return x - y;
}

function multiplicar(x, y) {
    return x * y;
}

function dividir(x, y) {
    return x / y;
}

function preguntaOp() {
    alert('Usted selecciono la opcion: ' + calculos[calcEntry]);

    do {
        num1 = Number(prompt('Introduzca el primer numero:'));
    } while (isNaN(num1));

    do {
        num2 = Number(prompt('Introduzca el segundo numero:'));
    } while (isNaN(num2));

    if (calcEntry == 0 || calcEntry == 1) {
        alert(`A continuacion, el resultado de ${calculos[calcEntry].toLocaleLowerCase()} ${num1} y ${num2}`);
    } else {
        alert(`A continuacion, el resultado de ${calculos[calcEntry].toLocaleLowerCase()} ${num1} por ${num2}`);
    }
}

do {
    calcEntry = Number(prompt('Elija un calculo a realizar:' +
                            '\n[0] - ' + calculos[0] +
                            '\n[1] - ' + calculos[1] +
                            '\n[2] - ' + calculos[2] +
                            '\n[3] - ' + calculos[3]
                            )
    );

    if (calcEntry != 0 && calcEntry != 1 && calcEntry != 2 && calcEntry != 3) {
        alert('La opcion seleccionada no existe');
    }
} while (calcEntry != 0 && calcEntry != 1 && calcEntry != 2 && calcEntry != 3);

switch (calcEntry) {

    case 0:
        preguntaOp();
        alert(`El resultado es:   ${num1 + num2}`);
        break;

    case 1:
        preguntaOp();
        alert(`El resultado es:   ${num1 - num2}`);
        break;

    case 2:
        preguntaOp();
        alert(`El resultado es:   ${num1 * num2}`);
        break;

    case 3:
        preguntaOp();
        if(num2 == 0) {
            alert(`Error: se intento dividir por 0!`);
        } else {
            alert(`El resultado es:   ${num1 / num2}`);
        }
        break;

    default:
        alert('La opcion seleccionada no existe');
}