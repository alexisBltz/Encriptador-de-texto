
function encriptar(){
    //Recogo el texto escrito en la variable
    var textoOriginal = document.getElementById('texto').value;

    // Verificar si el texto contiene caracteres que no son minúsculas y sin acentos con expresiones regulares
    if (!/^[a-záéíóúñ0-9,.!?;_\s]+$/.test(textoOriginal)) {
        var text = 'El texto debe contener solo letras minúsculas y sin acentos'
        var textoElement = document.createElement('p');
        // Agregar el texto encriptado al elemento
        textoElement.textContent = text;
        // Agregar la clase CSS al elemento
        textoElement.classList.add('textoEncriptado');

        var salidaContenedor = document.querySelector('.salida')

        salidaContenedor.innerHTML = '';

        salidaContenedor.appendChild(textoElement);

    } else {

        var textoEncriptado=encriptacion(textoOriginal)

        textoElement = document.createElement('p');



        // Agregar el texto encriptado al elemento
        textoElement.textContent = textoEncriptado;


        // Agregar la clase CSS al elemento
        textoElement.classList.add('textoEncriptado');

        salidaContenedor = document.querySelector('.salida')

        salidaContenedor.innerHTML = '';

        salidaContenedor.appendChild(textoElement);


    }
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




