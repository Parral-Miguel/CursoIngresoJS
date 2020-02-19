function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var recopilador=0;

	while (true) {
		recopilador = prompt("Ingrese los valores para operar");
		recopilador = parseInt(recopilador);
		if (isNaN(recopilador)) {
			break;
		}
		if (recopilador < 0) {
			
			negativo = negativo * recopilador;
		} else {
			
			positivo = positivo + recopilador;
		}
		
		contador++;
		console.log (recopilador);
	}
	console.log (recopilador);
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN