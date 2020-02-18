function mostrar()
{

	var contador=0;
	var acumulador=0;
	var recopilador;

	while (contador < 5) {
		contador++;
		recopilador = prompt("Ingrese los valores a promediar");
		recopilador = parseInt(recopilador);
		acumulador = acumulador + recopilador;
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN