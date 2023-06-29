//EFECTO DE NAVEGACION EFECTO DE SCROLL
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0 );
  });


//FUNCIÓN PARA CERRAR EL MENÚ AL HACER CLIC EN UN LINK DEL MENÚ EN MODO RESPONSIVO
  const propertyLinks = document.querySelectorAll('.menu__link');
  const checkbox = document.getElementById('menu__bar');

  propertyLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      checkbox.checked = false;
    });
  });

//VARIABLES PARA LEER EL FORM Y LOS INPUTS DE CONTACTO
var form = document.getElementById("form");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correoelectronico");
var asunto = document.getElementById("asunto");
var mensaje = document.getElementById("mensaje");

//CÓDIGO PARA CONTAR LOS CARACTERES DEL INPUT NOMBRE EN CONTACTO
var nombreResult = document.getElementById("nombre-counter");
var nombreLimit = 50;
nombreResult.textContent = 0 + "/" + nombreLimit;

nombre.addEventListener("input", function(){
    var nombreLength = nombre.value.length;
    var errorNombre = document.querySelector('.contact__error--nombre');
    nombreResult.textContent = nombreLength + "/" + nombreLimit;

    if(nombreLength > nombreLimit){
        errorNombre.innerText = 'El nombre debe tener máximo 50 caracteres';
        nombre.style.borderColor = "#FF2851";
        nombreResult.style.color = "#FF2851";
    }
    else{
        errorNombre.innerText = '';
        nombre.style.borderColor = "#f0f0f0";
        nombreResult.style.color = "var(--color-cenizo56)";
    }
});

var asuntoResult = document.getElementById("asunto-counter");
var asuntoLimit = 50;
asuntoResult.textContent = 0 + "/" + asuntoLimit;

asunto.addEventListener("input", function(){
    var asuntoLength = asunto.value.length;
    var errorAsunto = document.querySelector('.contact__error--asunto');
    asuntoResult.textContent = asuntoLength + "/" + asuntoLimit;

    if(asuntoLength > asuntoLimit){
        errorAsunto.innerText = 'El asunto debe tener máximo 50 caracteres';
        asunto.style.borderColor = "#FF2851";
        asuntoResult.style.color = "#FF2851";
    }
    else{
        errorAsunto.innerText = '';
        asunto.style.borderColor = "#f0f0f0";
        asuntoResult.style.color = "var(--color-cenizo56)";
    }
});

var mensajeResult = document.getElementById("mensaje-counter");
var mensajeLimit = 300;
mensajeResult.textContent = 0 + "/" + mensajeLimit;

mensaje.addEventListener("input", function(){
    var mensajeLength = mensaje.value.length;
    var errorMensaje = document.querySelector('.contact__error--mensaje');
    mensajeResult.textContent = mensajeLength + "/" + mensajeLimit;

    if(mensajeLength > mensajeLimit){
        errorMensaje.innerText = 'El mensaje debe tener máximo 300 caracteres';
        mensaje.style.borderColor = "#FF2851";
        mensajeResult.style.color = "#FF2851";
    }
    else{
        errorMensaje.innerText = '';
        mensaje.style.borderColor = "#f0f0f0";
        mensajeResult.style.color = "var(--color-cenizo56)";
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
});


function sendMail() {
    if(asunto.value != '' &&
       nombre.value != '' &&
       correo.value != '' &&
       mensaje.value != '' &&
       asunto.value.length <= asuntoLimit &&
       nombre.value.length <= nombreLimit &&
       mensaje.value.length <= mensajeLimit){
        var params = {
            subject: asunto.value,
            name: nombre.value,
            email: correo.value,
            message: mensaje.value
        };
    
        const serviceID = "service_lk5064b";
        const templateID = "template_d6ybiph";
    
        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                console.log(res);
                alert("Se ha enviado tu mensaje con éxito");
                asunto.value = '';
                nombre.value = '';
                correo.value = '';
                mensaje.value = '';
                nombreResult.textContent = 0 + "/" + nombreLimit;
                asuntoResult.textContent = 0 + "/" + asuntoLimit;
                mensajeResult.textContent = 0 + "/" + mensajeLimit;
            })
            .catch((err) => console.log(err));
    }
}
