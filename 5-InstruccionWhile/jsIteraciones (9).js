function mostrar()
{

	var contador=0;
	var recopilador;
	var maximo;
	var minimo;
	var salida;
	// declarar variables
	
	
	while (true) {
		recopilador = prompt("Ingrese los valores para operar o salir para terminar");
		if (recopilador == "salir") {
			break;
		}
		recopilador = parseInt(recopilador);

		while (isNaN(recopilador)) {
			recopilador = prompt("Error. Ingrese un numero o salir");
			if (recopilador == "salir") {
				salida = true;
				break;
			}
			recopilador = parseInt(recopilador);
		} 
		if (salida == true) {
			salida = false;
			break;
		}
			
		if (contador == 0) {
			maximo = recopilador;
			minimo = recopilador;
			contador++;
		}
		
		if (recopilador > maximo) {
			maximo = recopilador;
		}
		else if (recopilador < minimo) {
			minimo = recopilador;
		} 
	}

	if (maximo == undefined) {
		document.getElementById('maximo').value="Ningun valor ingresado";
		document.getElementById('minimo').value="Ningun valor ingresado";	
	} else {
		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;
	}
	console.log (recopilador);
	

}//FIN DE LA FUNCIÓN