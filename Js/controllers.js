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