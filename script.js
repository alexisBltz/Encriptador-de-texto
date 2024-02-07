// Función para verificar la entrada de texto
function verificarEntrada(){
    let textoOriginal = document.getElementById('texto').value;
    if (!/^[a-z,_\s]+$/.test(textoOriginal)) {
        var text = 'El texto debe contener solo letras minúsculas y sin acentos';
        var textoElement = document.createElement('p');
        textoElement.textContent = text;
        textoElement.classList.add('textoEncriptado');
        var salidaContenedor = document.querySelector('.salida');
        salidaContenedor.innerHTML = '';
        salidaContenedor.appendChild(textoElement);
        return;
    }
    return textoOriginal;
}

// Función para encriptar el texto
function encriptar(){
    var textoOriginal = verificarEntrada();
    if (!textoOriginal) return; // Salir si no hay texto original

    var textoEncriptado = encriptacion(textoOriginal);

    var textoElement = document.createElement('p');
    textoElement.textContent = textoEncriptado;
    textoElement.classList.add('textoEncriptado');
    var salidaContenedor = document.querySelector('.salida');
    salidaContenedor.innerHTML = '';
    salidaContenedor.appendChild(textoElement);
}

function encriptacion(textoOriginal) {
    let letrasPalabra = [textoOriginal.length]

    for(var i=0; i < textoOriginal.length; i++){
        //dividimos el texto en letras
        letrasPalabra[i]=textoOriginal.substring(i,i+1);
        //encriptamos las letras correspondientes
        letrasPalabra[i]=values(letrasPalabra[i]);
    }
    console.log(letrasPalabra)

    return letrasPalabra.join('')


}
function values(letrasPalabra){
    switch(letrasPalabra) {
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'a':
                return 'ai';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return letrasPalabra;
        }
}




