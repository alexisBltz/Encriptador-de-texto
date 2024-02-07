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

function crearP(texto){
    var textoElement = document.createElement('p');
    textoElement.textContent = texto;
    textoElement.classList.add('textoEncriptado');
    var salidaContenedor = document.querySelector('.salida');
    salidaContenedor.innerHTML = '';
    salidaContenedor.appendChild(textoElement);

    copiar(texto)
}
function encriptar(){
    var textoOriginal = verificarEntrada();
    if (!textoOriginal) return; // Salir si no hay texto original

    var textoEncriptado = encriptacion(textoOriginal);

    crearP(textoEncriptado)
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
    // Hash para encriptar
    const valores = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return valores[letra] || letra;
}

function desencriptar(textoOriginal) {
    var textoOriginal = verificarEntrada();
    if (!textoOriginal) return; // Salir si no hay texto original

    var textoEncriptado = desencriptacion(textoOriginal);

    crearP(textoEncriptado)
}
function desencriptacion(textoOriginal){
    if (['a', 'e', 'i', 'o', 'u'].some(letra => textoOriginal.includes(letra))) {
       var textoDesencriptado = textoOriginal.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    }
    console.log(textoDesencriptado)
    return textoDesencriptado
}

function copiar (texto){

    var boton = document.createElement('button');

    boton.textContent = 'Copiar';
    boton.id = 'miBotonCopiar';

    boton.addEventListener('click', function() {
        navigator.clipboard.writeText(texto)
                .then(() => {
                    alert('Texto copiado al portapapeles')
                })
                .catch(err => {
                    alert('Error al copiar al portapapeles:', err)
                })
        }
    )
    var contenedor = document.querySelector('.salida');
    contenedor.appendChild(boton);
}





