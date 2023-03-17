function copyToClipBoard() {

    let content = document.querySelector(".text-input-salida");

    content.select();
    document.execCommand('copy');




}
function showModal(){
    document.querySelector("#modal").style.opacity="1"
    document.querySelector("#modal").style.pointerEvents="unset"
}
function closeModal(){
    document.querySelector("#modal").style.opacity="0"
    document.querySelector("#modal").style.pointerEvents="none"
}
let boton4=document.querySelector("#modalClose")
const boton3 = document.querySelector("#btn-copy");
boton3.onclick = copyToClipBoard;
boton3.onclick=showModal;
boton4.onclick=closeModal;
