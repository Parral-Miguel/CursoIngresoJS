function mostrar()
{

    var hastaAca;
    hastaAca = prompt ("ingrese el numero limite");
    hastaAca = parseInt(hastaAca);

    while (isNaN(hastaAca) || hastaAca < 0) {
        hastaAca = prompt ("ingrese un valor valido");
        hastaAca = parseInt(hastaAca);
    }
    var contadorDivis = 0
    
    for (var contador = 1; contador <= hastaAca; contador++){
        
        if (hastaAca % contador == 0) {
            console.log(contador)
            contadorDivis++         
        }
    }
    console.log("Numero de Divisores = " + contadorDivis);


}//FIN DE LA FUNCIÓN