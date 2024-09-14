function mostrarSeccion(seccionID) {
    const secciones = document.querySelectorAll('.contenedor_principal');
    const enlaces = document.querySelectorAll('nav a');

    secciones.forEach(seccion => {
        if (seccion.id === seccionID) {
            seccion.classList.add('activo');
        } else {
            seccion.classList.remove('activo');
        }
    });
    
    enlaces.forEach(enlace => {
        enlace.classList.remove('enlace_activo');
    });

    enlaces.forEach(enlace => {
        if (enlace.getAttribute('href') === `#${seccionID}`) {
            enlace.classList.add('enlace_activo');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarSeccion('acercade');
});

document.addEventListener("DOMContentLoaded", () => {
    const TextoDesarrollador = document.getElementById('estudiante');
    const texto = TextoDesarrollador.innerText;
    TextoDesarrollador.innerText = '';
    let index = 0;

    function escritura() {
        if (index < texto.length) {
            TextoDesarrollador.innerHTML += texto.charAt(index);
            index++;
            setTimeout(escritura, 100);
        } else {
            setTimeout(escrituraInfinita, 5000);
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
    actualizacionDiaria();
});

function actualizarFecha() {
    const fechaIncial = new Date('2023-09-13');

    const fechaHoy = new Date();

    const diasTotales = Math.floor((fechaHoy - fechaIncial) / (1000 * 60 * 60 * 24));

    let anios = Math.floor(diasTotales / 365);

    let diasRestantes = diasTotales % 365;

    let meses  = Math.floor(diasRestantes / 30);

    let dias = diasRestantes % 30;

    let fechaAjustada = new Date(fechaIncial.getFullYear() + anios, fechaIncial.getMonth() + meses, fechaIncial.getDate());

    if (fechaHoy < fechaAjustada) {
        meses--;
        dias = Math.floor((fechaHoy - new Date(fechaIncial.getFullYear() + anios, fechaIncial.getMonth() + meses, fechaIncial.getDate())) / (1000 * 60 * 60 * 24));
    }

    document.getElementById('años').innerHTML = ("<span class='fecha-titulo'>Años</span>" + padDigits(anios));
    document.getElementById('meses').innerHTML = ("<span class='fecha-titulo'>Meses</span>" + padDigits(meses));
    document.getElementById('dias').innerHTML = ("<span class='fecha-titulo'>Dias</span>" + padDigits(dias));
}

function actualizacionDiaria() {
    const ahora = new Date();
    const manana = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate() + 1, 0, 0, 0);
    const tiempoRestante = manana - ahora;

    setTimeout(function() {
        actualizarFecha();
        setInterval(actualizarFecha, 86400000);
    }, tiempoRestante);
}

function padDigits(number) {
    return (number < 10) ? `0${number}`: number;
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
    var form = document.getElementById("formularioContacto")
    let params = {
        nombre: form.elements["nombre"].value,
        apellido: form.elements["apellido"].value,
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

    const inputs = document.querySelectorAll('.formularioContacto input');
    const textarea = document.querySelector('.formularioContacto textarea');

    inputs.forEach(input => {
        if (emailjs.send) {
            input.value = '';
        }
    });
    textarea.value = '';
}