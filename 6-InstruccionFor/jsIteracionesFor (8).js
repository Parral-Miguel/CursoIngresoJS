function mostrar()
{

    var numero;
    numero = prompt ("ingrese el numero limite");
    numero = parseInt(numero);

    while (isNaN(numero) || numero < 0) {
        numero = prompt ("ingrese un valor valido");
        numero = parseInt(numero);
    }
    var contadorDivis = 0
    var noesprimo = false

    for (var contador = 1; contador <= numero; contador++){
        
        if (numero % contador == 0) {
            console.log(contador)
            contadorDivis++         
        }
        if (contadorDivis > 2) {
            noesprimo = true
            break;
        }
    }
    if (noesprimo) {
        console.log("No es primo");    
        alert("No es primo")
    } else {
        console.log("Es primo");
        alert("Es primo")
    }
    console.log("Numero de Divisores = " + contadorDivis);


}//FIN DE LA FUNCIÓN