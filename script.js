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
    //separa la palabra letra por letra
    let letrasPalabra = textoOriginal.split('');
    for(var i = 0; i < letrasPalabra.length; i++){
        letrasPalabra[i] = values(letrasPalabra[i]);
    }
    return letrasPalabra.join('');


}

function values(letra) {
    return valores[letra] || letra;
}

// Hash para encriptar
const valores = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};





