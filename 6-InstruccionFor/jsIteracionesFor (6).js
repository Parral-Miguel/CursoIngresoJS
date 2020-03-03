function mostrar()
{
    var hastaAca
    hastaAca = prompt ("ingrese el numero limite");
    hastaAca = parseInt(hastaAca);

    while (isNaN(hastaAca) || hastaAca < 0) {
        hastaAca = prompt ("ingrese un valor valido");
        hastaAca = parseInt(hastaAca);
    }
    var contadorPares = 0
    
    for (var contador = 1; contador <= hastaAca; contador++){
        
        if (contador % 2 == 0) {
            console.log(contador)
            contadorPares++         
        }
    }
    console.log("Numero de Pares = " + contadorPares);



}//FIN DE LA FUNCIÓN