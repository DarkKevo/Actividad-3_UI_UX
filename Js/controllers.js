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

//CONTROLADOR DE MENU DESPLEGABLE y SCROLLS

$(document).ready(function () {
    //Drop Automatico
    $('.barra1').click(function () {
        $('#icon-1').toggleClass('reverse');
        $('#icon-2').removeClass('reverse');
        $('#icon-3').removeClass('reverse');
        $('#icon-4').removeClass('reverse');
        $('#icon-5').removeClass('reverse');
        $('#li1').slideToggle();
        $('#li2').slideUp();
        $('#li3').slideUp();
        $('#li4').slideUp();
        $('#li5').slideUp();
    });
    $('.barra2').click(function () {
        $('#icon-2').toggleClass('reverse');
        $('#icon-1').removeClass('reverse');
        $('#icon-3').removeClass('reverse');
        $('#icon-4').removeClass('reverse');
        $('#icon-5').removeClass('reverse');
        $('#li2').slideToggle();
        $('#li1').slideUp();
        $('#li3').slideUp();
        $('#li4').slideUp();
        $('#li5').slideUp();
    });
    $('.barra3').click(function () {
        $('#icon-3').toggleClass('reverse');
        $('#icon-1').removeClass('reverse');
        $('#icon-2').removeClass('reverse');
        $('#icon-4').removeClass('reverse');
        $('#icon-5').removeClass('reverse');
        $('#li3').slideToggle();
        $('#li1').slideUp();
        $('#li2').slideUp();
        $('#li4').slideUp();
        $('#li5').slideUp();
    });

    $('.barra4').click(function () {
        $('#icon-4').toggleClass('reverse');
        $('#icon-1').removeClass('reverse');
        $('#icon-2').removeClass('reverse');
        $('#icon-3').removeClass('reverse');
        $('#icon-5').removeClass('reverse');
        $('#li4').slideToggle();
        $('#li1').slideUp();
        $('#li2').slideUp();
        $('#li3').slideUp();
        $('#li5').slideUp();
    });
    $('.barra5').click(function () {
        $('#icon-5').toggleClass('reverse');
        $('#icon-1').removeClass('reverse');
        $('#icon-2').removeClass('reverse');
        $('#icon-3').removeClass('reverse');
        $('#icon-4').removeClass('reverse');
        $('#li5').slideToggle();
        $('#li1').slideUp();
        $('#li2').slideUp();
        $('#li3').slideUp();
        $('#li4').slideUp();
    });
});

//<---------------------------------------------------->

//CONTROLADOR DE LOS SCROLLS

document.addEventListener('click', function (event) {
    if (!event.target.matches('.btn-scroll-view')) return;

    event.preventDefault();

    const element = document.getElementById(event.target.dataset.target);

    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

//<---------------------------------------------------->

//CONTROLADOR DE FORMULARIOS

$(document).ready(function () {
    //add
    $('#formulario-banner').submit(function (e) {
        const postData = {
            name: $('#nombre-apellido').val(),
            email: $('#correo-electronico').val(),
            telefono: $('#telefono-f').val(),
            zona: $('#zona').val(),
        };
        $.post('datos-add.php', postData, function (response) {
            console.log(response);
            $('#formulario-banner').trigger('reset');
        });
        e.preventDefault();
    });

    //add2
    $('#formulario-about').submit(function (e) {
        const postData = {
            name: $('#nombre-about').val(),
            email: $('#correo-about').val(),
            informacion: $('#informacion-about').val(),
        };
        $.post('datos-add2.php', postData, function (response) {
            console.log(response);
            $('#formulario-banner').trigger('reset');
        });
        e.preventDefault();
    });
});

//<--------------------------------------------------------------------->

// all animations

//observar

const item1 = document.getElementById('speed-t');
const item2 = document.getElementById('speed-p');
const item3 = document.getElementById('contenedor-slider');
const item4 = document.getElementById('why-t');
const item5 = document.getElementById('why-v');
const item6 = document.getElementById('about-t');
const item7 = document.getElementById('about-f');
const item8 = document.getElementById('destacado-t')
const item9 = document.getElementById('destacado-p')
const item10 = document.getElementById('destacado-tc')
const item11 = document.getElementById('op1')
const item12 = document.getElementById('op2')
const item13 = document.getElementById('preguntas-t')
const item14 = document.getElementById('preguntas-d')

const charge = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            //entrada
            entrada.target.classList.add('visible');
        } else {
            entrada.target.classList.remove('visible');
        }
    });
};

//observador

const observador = new IntersectionObserver(charge, {
    threshold: 0.5,
});

observador.observe(item1);
observador.observe(item2);
observador.observe(item3);
observador.observe(item4);
observador.observe(item5);
observador.observe(item6);
observador.observe(item7);
observador.observe(item8);
observador.observe(item9);
observador.observe(item10);
observador.observe(item11);
observador.observe(item12);
observador.observe(item13);
observador.observe(item14);
