let lotes = [];
let carrito = [];
let cardLinks = document.querySelectorAll('.cardLink');

const container = document.querySelector('#container');
const message = document.querySelector('.article2 h2');
document.querySelector('#updateBtn').onclick = () => {actualizar()};

function confirmar(lote) {
    respuesta = confirm(`Desea agregar el lote ${lote} al carrito`);

    if(respuesta) {
        if(carrito.indexOf(lote) != -1) {
            alert('El lote ya se encuentra en el carrito!');
        } else {
            carrito.push(lote);
        }
    }
    console.log(carrito);
}

function actualizar() {
    console.log(carrito.length);

    if(carrito.length == 0) {
        container.style.display = 'none';
    } else {
        message.style.display = 'none';
        container.style.display = 'inline-block';

        for(producto of carrito) {
            console.log(lotes[producto]);
            container.innerHTML += cardLinks[producto];
        }
    }
}

for(card of cardLinks) {
    lotes.push(card);
    let pos = lotes.indexOf(card) + 1;
    card.onclick = () => confirmar(pos);
    console.log(lotes);
}

cardLinks.forEach(item => item.classList.add(lotes.indexOf(item)+1));