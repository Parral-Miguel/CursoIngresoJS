function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var recopilador=0;

	while (isNaN(recopilador)) {
		contador++;
		recopilador = prompt("Ingrese los valores a promediar");
		recopilador = parseInt(recopilador);
		if (isNaN(recopilador)) {
			break;
		}
		
		acumulador = acumulador + recopilador;
		console.log (recopilador);
		if (contador == 4) {
			break;
		}
	}
	console.log (recopilador);
	promedio = acumulador / contador
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN