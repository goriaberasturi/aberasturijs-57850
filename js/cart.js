let catalogo = [];
fetch('productos.json')
    .then((resp) => resp.json())
    .then((prods) => {
        catalogo = prods;
        for(let i = 0; i < catalogo.length; i++) {
            document.querySelector(`#l${i + 1}`).onclick = () => agregar(i);
        }
        console.log(catalogo);
    });
let cart = [];
let cartLS = JSON.parse(localStorage.getItem('carritoLotes'));
let message = document.querySelector('#message');
let container = document.querySelector('#container');

document.querySelector('#clearBtn').addEventListener('click', function limpiar() {
    cart = [];
    localStorage.clear();
    container.innerHTML = '';
    message.style.display = 'block'
});

function actualizar() {
    cartLS = JSON.parse(localStorage.getItem('carritoLotes'));
    cartLS && (cart = cartLS);
    
    if(cart.length != 0) {
        message.style.display = 'none';
        container.style.display = 'grid'
        container.innerHTML = '';
        for(product of cart) {
            container.innerHTML += `<a class="cardLink" href="#"><div class="selfcard"><div class="cardImg l${product.id +1}"></div><div class="cardTxt"><h3 class="card-title">${product.title}</h3><p class="card-text">${product.description}</p></div></div></a>`;
        }
    }
}

function agregar(element) {
    console.log('======= Inicio de la funcion agregar() =======');
    respuesta = confirm(`Desea agregar el lote ${element + 1} al carrito?`);
    
    if(respuesta) {
        if((cart.find(({id}) => id == catalogo[element].id)) == undefined) {
            cart.push(catalogo[element]);
            localStorage.setItem('carritoLotes', JSON.stringify(cart));
            actualizar();
            
        } else {
            alert('El lote ya se encuentra en el carrito!');
        }
    }
}

actualizar();