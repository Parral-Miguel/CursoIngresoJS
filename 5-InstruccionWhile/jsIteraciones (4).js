function mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 10.");

	var contador;
    contador = 0;
    while ((numero < 0) || (numero > 9) || isNaN(numero)) {
		numero = prompt("Incorrecto. Ingrese nuevamente");
		contador++;		
        if (contador == 2) {
            break;
    	}
	}
    if ((numero >= 0) && (numero < 11) && (numero != "")) {
		alert("Ingresado correctamente")
		document.getElementById('Numero').value= numero;		
    } else {
        alert("intentos max");
    }
}//FIN DE LA FUNCIÓN