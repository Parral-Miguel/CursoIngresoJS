function mostrar()
{

	var contador=0;
	var acumulador=0;
	var recopilador=0;

	while (true) {
		recopilador = prompt("Ingrese los valores a promediar");
		recopilador = parseInt(recopilador);

		if (isNaN(recopilador)) {
			break;
		}
		
		contador++;
		acumulador = acumulador + recopilador;
		console.log (recopilador);
	}
	console.log (recopilador);
	promedio = acumulador / contador
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN