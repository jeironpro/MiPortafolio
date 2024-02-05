function enviarCorreo() {
    var form = document.getElementById("miFormulario")
    let params = {
        nombre: form.elements["nombre"].value,
        correo: form.elements["correo"].value,
        telefono: form.elements["telefono"].value,
        asunto: form.elements["asunto"].value,
        mensaje: form.elements["mensaje"].value,
    }

    emailjs.send('service_zfzhzj5','template_1hyvg4n',params).then(function(response) {
        alert('Mensaje enviado correctamente!');
    }, function(error) {
        alert(JSON.stringify(error))
    });
}

function guionesTelefono(input) {
    input.value = input.value.replace(/\D/g, '');

    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3) + '-' + input.value.slice(3);
    }

    if (input.value.length > 7) {
        input.value = input.value.slice(0, 7) + '-' + input.value.slice(7);
    }
}

function menuBurger() {
    var ul = document.querySelector('ul');
    var main = document.querySelector('main');
    ul.classList.toggle('active');

    if (ul.classList.contains('active')) {
        main.style.marginTop = '250px';
    } else {
        main.style.marginTop = '100px';
    }
}

function scrollToSection(sectionID) {
    const section = document.getElementById(sectionID);
    const espacio = document.querySelector('header').offsetHeight;

    window.scrollTo({
        top: section.offsetTop - espacio,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    cambiarImagen(0);
});

let index = 0;
const imagenes = [
    'img/alpha/1.jpg',
    'img/alpha/2.jpg',
    'img/alpha/3.jpg',
    'img/alpha/4.jpg',
    'img/alpha/5.jpg',
    'img/alpha/6.jpg',
    'img/alpha/7.jpg',
    'img/alpha/8.jpg',
    'img/alpha/9.jpg',
    'img/alpha/10.jpg',
    'img/alpha/11.jpg',
    'img/alpha/12.jpg',
    'img/alpha/13.jpg',
    'img/alpha/14.jpg',
    'img/alpha/15.jpg',
    'img/alpha/16.jpg',
    'img/alpha/17.jpg',
    'img/alpha/18.jpg',
    'img/alpha/19.jpg',
    'img/alpha/20.jpg',
    'img/alpha/21.jpg',
    'img/alpha/22.jpg',
    'img/alpha/23.jpg',
    'img/alpha/24.jpg',
    'img/alpha/25.jpg',
    'img/alpha/26.jpg',
    'img/alpha/27.jpg',
    'img/alpha/28.jpg',
    'img/alpha/29.jpg',
    'img/alpha/30.jpg',
    'img/alpha/31.jpg',
    'img/taveras/1.jpg',
    'img/taveras/2.jpg',
    'img/taveras/3.jpg',
    'img/taveras/4.jpg',
    'img/taveras/5.jpg',
    'img/taveras/6.jpg',
    'img/taveras/7.jpg',
    'img/taveras/8.jpg',
    'img/taveras/9.jpg',
    'img/taveras/10.jpg',
    'img/taveras/11.jpg',
    'img/taveras/12.jpg',
    'img/taveras/13.jpg',
    'img/taveras/14.jpg',
    'img/taveras/15.jpg',
    'img/taveras/16.jpg',
    'img/taveras/17.jpg',
    'img/taveras/18.jpg',
    'img/taveras/19.jpg',
    'img/taveras/20.jpg',
    'img/preguntasrespuestas/1.jpg',
    'img/preguntasrespuestas/2.jpg',
    'img/preguntasrespuestas/3.jpg',
    'img/preguntasrespuestas/4.jpg',
    'img/preguntasrespuestas/5.jpg',
    'img/preguntasrespuestas/6.jpg',
    'img/preguntasrespuestas/7.jpg',
    'img/calculadora/1.jpg',
    'img/calendario/1.jpg',
    'img/calendario/2.jpg',
    'img/calendario/3.jpg',
    'img/reproductorMusica/1.jpg',
    'img/reproductorMusica/2.jpg',
    'img/reproductorMusica/3.jpg',
];

function cambiarImagen(delta) {
    index += delta;

    if (index < 0) {
        index = imagenes.length - 1;
    } else if (index >= imagenes.length) {
        index = 0;
    }

    const imagenCarrusel = document.getElementById('imagenCarrusel');
    imagenCarrusel.classList.add('hidden');

    setTimeout(() => {
        imagenCarrusel.src = imagenes[index];

        imagenCarrusel.classList.remove('hidden');

        setTimeout(() => {
            imagenCarrusel.classList.add('visible');
        }, 10);
    }, 300);

    setTimeout(() => {
        imagenCarrusel.classList.remove('visible');
    }, 700);

    actualizarIndicadores();
}

function actualizarIndicadores() {
    const indicadores = document.querySelector('.indicadores')
    indicadores.innerHTML = '';

    for (let i = 0; i < imagenes.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === index) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', function () {
            cambiarImagen(i - index);
        });
        indicadores.appendChild(dot);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    actualizarFecha();

    setInterval(actualizarFecha, 86400000);
});

function actualizarFecha() {
    const fechaIncial = new Date('2023-09-13');

    const fechaHoy = new Date();

    const tiempoDiferencia = fechaHoy - fechaIncial;

    const diasInicio = Math.floor(tiempoDiferencia / (1000 * 60 * 60 * 24));

    const anos = Math.floor(diasInicio / 365);
    const meses = Math.floor((diasInicio % 365)/ 30);
    const dias = diasInicio % 30;

    document.getElementById('años').innerHTML = ("<span class='fecha-titulo'>Años</span>" + padDigits(anos));
    document.getElementById('meses').innerHTML = ("<span class='fecha-titulo'>Meses</span>" + padDigits(meses));
    document.getElementById('dias').innerHTML = ("<span class='fecha-titulo'>Dias</span>" + padDigits(dias));
}

function padDigits(number) {
    return (number < 10) ? `0${number}`: number;
}