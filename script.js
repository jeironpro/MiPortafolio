document.addEventListener("DOMContentLoaded", () => {
    const TextoDesarrollador = document.getElementById('desarrollador-titulo');
    const texto = TextoDesarrollador.innerText;
    TextoDesarrollador.innerText = '';
    let index = 0;

    function escritura() {
        if (index < texto.length) {
            TextoDesarrollador.innerHTML += texto.charAt(index);
            index++;
            setTimeout(escritura, 100);
        } else {
            setTimeout(escrituraInfinita, 1000);
        }
    }

    function escrituraInfinita() {
        TextoDesarrollador.innerHTML = '';
        index = 0;
        escritura();
    }

    escritura();
});

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

    let proyectos = document.querySelectorAll('.proyecto').length;

    document.getElementById('años').innerHTML = ("<span class='fecha-titulo'>Años</span>" + padDigits(anos));
    document.getElementById('meses').innerHTML = ("<span class='fecha-titulo'>Meses</span>" + padDigits(meses));
    document.getElementById('dias').innerHTML = ("<span class='fecha-titulo'>Dias</span>" + padDigits(dias));
    document.getElementById('proyectos-contador').innerHTML = ("<span class='proyectos-contador'>Proyectos</span>" + String(proyectos).padStart(2, '0'));
}

function padDigits(number) {
    return (number < 10) ? `0${number}`: number;
}

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card-proyecto');
    const anteriorPro = document.querySelector('.anterior-pro');
    const siguientePro = document.querySelector('.siguiente-pro');
    const posicionPro = document.querySelector('.posicion-pro');
    let index = 0;

    function mostrarProyecto(indice) {
        cards.forEach((card, i) => {
            card.classList.remove('activo');
            if (i === indice) {
                card.classList.add('activo');
            }
        });
        posicionPro.textContent = indice + 1;
    }

    anteriorPro.addEventListener('click', function() {
        index = (index > 0) ?  index - 1 : cards.length - 1;
        mostrarProyecto(index);
    });

    siguientePro.addEventListener('click', function() {
        index = (index < cards.length - 1) ? index + 1 : 0;
        mostrarProyecto(index);
    });
    mostrarProyecto(index);
});

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
    'img/prestamos/1.jpg',
    'img/prestamos/2.jpg',
    'img/prestamos/3.jpg',
    'img/prestamos/4.jpg',
    'img/prestamos/5.jpg',
    'img/prestamos/6.jpg',
    'img/prestamos/7.jpg',
    'img/prestamos/8.jpg',
    'img/prestamos/9.jpg',
    'img/prestamos/10.jpg',
    'img/prestamos/11.jpg',
    'img/prestamos/12.jpg',
    'img/prestamos/13.jpg',
    'img/prestamos/14.jpg',
    'img/prestamos/15.jpg',
    'img/prestamos/16.jpg',
    'img/prestamos/17.jpg',
    'img/prestamos/18.jpg',
    'img/prestamos/19.jpg',
    'img/prestamos/20.jpg',
    'img/preguntasrespuestas/1.jpg',
    'img/preguntasrespuestas/2.jpg',
    'img/preguntasrespuestas/3.jpg',
    'img/preguntasrespuestas/4.jpg',
    'img/preguntasrespuestas/5.jpg',
    'img/preguntasrespuestas/6.jpg',
    'img/preguntasrespuestas/7.jpg',
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
}

function moverLabelArriba(input) { 
    var label = input.parentElement.querySelector('label');
    label.style.top = '-15px';
} 

function restaurarLabel(input) { 
    var label = input.parentElement.querySelector('label');
    if (input.value === "") { 
        label.style.top = "50%"; 
    } 
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