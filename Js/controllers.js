//CONTROLADOR DE BANNER SLIDER

const slider = document.querySelector('#slider-contenedor');

const derecha = document.querySelector('#derecha');
const izquierda = document.querySelector('#izquierda');

function next() {
    slider.style.marginLeft = '-100%';
}

function back() {
    slider.style.marginLeft = '-0%';
}

derecha.addEventListener('click', function () {
    next();
});

izquierda.addEventListener('click', function () {
    back();
});

//<------------------------------------------------->

//CONTROLADOR DE SLIDER DE SERVICIOS

const slider_servicios = document.querySelector('.slider-servicios');

let slider_secciones = document.querySelectorAll('.item-s');

let sliderLast = slider_secciones[slider_secciones.length - 1];

const boton_izquierdo = document.querySelector('#boton_izquierdo');

const boton_derecho = document.querySelector('#boton_derecho');

slider_servicios.insertAdjacentElement('afterbegin', sliderLast);

function mover_derecha() {
    let sliderFirst = document.querySelectorAll('.item-s')[0];

    slider_servicios.style.marginLeft = '-200%';

    slider_servicios.style.transition = 'all 0.8s';

    setTimeout(function () {
        slider_servicios.style.transition = 'none';
        slider_servicios.insertAdjacentElement('beforeend', sliderFirst);
        slider_servicios.style.marginLeft = '-100%';
    }, 800);
}

function mover_izquierda() {
    let slider_secciones = document.querySelectorAll('.item-s');

    let sliderLast = slider_secciones[slider_secciones.length - 1];

    slider_servicios.style.marginLeft = '0%';

    slider_servicios.style.transition = 'all 0.8s';

    setTimeout(function () {
        slider_servicios.style.transition = 'none';
        slider_servicios.insertAdjacentElement('afterbegin', sliderLast);
        slider_servicios.style.marginLeft = '-100%';
    }, 800);
}

boton_derecho.addEventListener('click', function () {
    mover_derecha();
});

boton_izquierdo.addEventListener('click', function () {
    mover_izquierda();
});

//<------------------------------------------------->