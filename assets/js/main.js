var nombre = document.getElementById("nombre");
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
