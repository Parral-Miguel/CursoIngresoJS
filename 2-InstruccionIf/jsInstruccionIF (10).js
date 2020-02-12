function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var mensaje;

	nota = (Math.random() * 10) + 1;
	nota = parseInt(nota);

	if(nota > 8) {
		
		mensaje = "EXCELENTE";
		alert("Nota: " + nota + ". " + mensaje);
	} else {
	
		if(nota < 4) {

			mensaje = "Vamos, la próxima se puede.";
			alert("Nota: " + nota + ". " + mensaje);
		} else {

			mensaje = "APROBÓ";
			alert("Nota: " + nota + ". " + mensaje);
		}
	}  
}//FIN DE LA FUNCIÓN