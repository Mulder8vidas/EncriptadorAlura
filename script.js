function encriptar (){
    let texto = document.querySelector("#input-texto").value;
    document.querySelector(".text-input-salida").value = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#input-texto").value;
    document.querySelector("#fotito").style.display="none";
    document.querySelector("#btn-copy").style.display="block";
}


let boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

function desencriptar (){
    let texto = document.querySelector("#input-texto").value;
    document.querySelector(".text-input-salida").value = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#input-texto").value;
    document.querySelector("#fotito").style.display="none";
    document.querySelector("#btn-copy").style.display="block";

}
const btnencrip= document.getElementById("btn-encriptar");
const textarea = document.getElementById("input-texto");
const btndesencrip=document.getElementById("btn-desencriptar");
textarea.addEventListener('input', () => {
    btnencrip.disabled = textarea.value === '';
    document.querySelector("#btn-encriptar").style.opacity="100%"
    document.querySelector("#btn-encriptar").style.cursor="pointer"

});


textarea.addEventListener('input', () => {
    btndesencrip.disabled = textarea.value === '';
    document.querySelector("#btn-desencriptar").style.opacity="100%"
    document.querySelector("#btn-desencriptar").style.cursor="pointer"

});


let boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;