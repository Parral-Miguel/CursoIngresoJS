function mostrar()
{
	var recopilador=0;
	var contador=0;
	var sumaNeg=0;
	var sumaPos=0;
	var diferencia=0;
	var contadorPos=0;
	var contadorNeg=0;
	var contadorCero=0;
	var contadorPares=0;
	var promedioNeg;
	var promedioPos;

	//declarar contadores y variables 
	
	while (true){
		recopilador = prompt("Ingrese los valores a promediar");
		recopilador = parseInt(recopilador);
		
		if (isNaN(recopilador)) {
			break;
		}
		
		contador++;
		
		if ((recopilador % 2) == 0) {
			
			contadorPares++;

		} if (recopilador < 0) {
			
			sumaNeg = sumaNeg + recopilador;
			contadorNeg++;
		
		} else if (recopilador == 0) {
			
			contadorCero++;
		
		} else if (recopilador > 0) {
			
			sumaPos = sumaPos + recopilador;
			contadorPos++;
		} 
		}
		
	promedioPos = sumaPos / contadorPos;
	promedioNeg = sumaNeg / contadorNeg;
	diferencia = sumaPos + sumaNeg;
	document.write ("Suma de negativos: " + sumaNeg);
	document.write ("<br>");
	document.write ("Suma de positivos: " + sumaPos);
	document.write ("<br>");
	document.write ("Cantidad de ceros: " + contadorCero);
	document.write ("<br>");
	document.write ("Cantidad de negativos: " + contadorNeg);
	document.write ("<br>");
	document.write ("Cantidad de positivos: " + contadorPos);
	document.write ("<br>");
	document.write ("Cantidad de pares: " + contadorPares);
	document.write ("<br>");
	document.write ("Promedio de los positivos: " + promedioPos);
	document.write ("<br>");
	document.write ("Promedio de los negativos: " + promedioNeg);
	document.write ("<br>");
	document.write ("Diferencia entre positivos y negativos: " + diferencia);

}

//FIN DE LA FUNCIÓN