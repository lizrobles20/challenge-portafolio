var nombre = document.getElementById("nombre");
var correo = document.getElementById("correoelectronico");
var nombreResult = document.getElementById("nombre-counter");
var nombreLimit = 50;
nombreResult.textContent = 0 + "/" + nombreLimit;

nombre.addEventListener("input", function(){
    var nombreLength = nombre.value.length;
    nombreResult.textContent = nombreLength + "/" + nombreLimit;

    if(nombreLength > nombreLimit){
        nombre.style.color = "#FF2851";
        nombreResult.style.color = "#FF2851";
    }
    else{
        nombre.style.color = "var(--color-cenizo46)";
        nombreResult.style.color = "var(--color-cenizo56)";
    }
});

var asunto = document.getElementById("asunto");
var asuntoResult = document.getElementById("asunto-counter");
var asuntoLimit = 50;
asuntoResult.textContent = 0 + "/" + asuntoLimit;

asunto.addEventListener("input", function(){
    var asuntoLength = asunto.value.length;
    asuntoResult.textContent = asuntoLength + "/" + asuntoLimit;

    if(asuntoLength > asuntoLimit){
        asunto.style.color = "#FF2851";
        asuntoResult.style.color = "#FF2851";
    }
    else{
        asunto.style.color = "var(--color-cenizo46)";
        asuntoResult.style.color = "var(--color-cenizo56)";
    }
});

var mensaje = document.getElementById("mensaje");
var mensajeResult = document.getElementById("mensaje-counter");
var mensajeLimit = 300;
mensajeResult.textContent = 0 + "/" + mensajeLimit;

mensaje.addEventListener("input", function(){
    var mensajeLength = mensaje.value.length;
    mensajeResult.textContent = mensajeLength + "/" + mensajeLimit;

    if(mensajeLength > mensajeLimit){
        mensaje.style.color = "#FF2851";
        mensajeResult.style.color = "#FF2851";
    }
    else{
        mensaje.style.color = "var(--color-cenizo46)";
        mensajeResult.style.color = "var(--color-cenizo56)";
    }
});

function sendMail() {
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
                asunto.value = "";
                nombre.value = "";
                correo.value = "";
                mensaje.value = "";
                console.log(res);
                alert("Se ha enviado tu mensaje con éxito");
            })
            .catch((err) => console.log(err));
    
}
