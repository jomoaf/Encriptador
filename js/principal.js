var btnencriptar = document.querySelector("#encriptar");
var btndesencriptar = document.querySelector("#desencriptar");
var entrada = document.querySelector("#entrada");
var salida = document.querySelector("#salida");


btnencriptar.addEventListener("click" ,function(event){
    event.preventDefault();

    txtEntrada = entrada.value; 
    txtEntrada = txtEntrada.toLowerCase();

    txtEntrada = txtEntrada.replace(/e/gi, "enter");
    txtEntrada = txtEntrada.replace(/i/gi, "imes");
    txtEntrada = txtEntrada.replace(/a/gi, "ai");
    txtEntrada = txtEntrada.replace(/o/gi, "ober");
    txtEntrada = txtEntrada.replace(/u/gi, "ufat");

    salida.classList.add("out")
    salida.textContent = txtEntrada;

});

btndesencriptar.addEventListener("click",function(event){
    event.preventDefault();

    var txtEntrada = entrada.value;
    txtEntrada = txtEntrada.toLowerCase();

    txtEntrada = txtEntrada.replace(/enter/gi, "e");
    txtEntrada = txtEntrada.replace(/imes/gi, "i");
    txtEntrada = txtEntrada.replace(/ai/gi, "a");
    txtEntrada = txtEntrada.replace(/ober/gi, "o");
    txtEntrada = txtEntrada.replace(/ufat/gi, "u");
    console.log(txtEntrada);

    salida.textContent = txtEntrada;

});

function copiar() {

    var contenido = document.getElementById("salida");
    
    contenido.select();
    document.execCommand("copy");
}

var s = {'special':/[^\w^ñ^(á|é|í|ó|ú)^\s^]/g}

function valid(o,w){
    o.value = o.value.replace(r[w],'');
}

function validaremos(o,w){
    o.value = o.value.replace(s[w],'');
}

