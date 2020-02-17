/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var respuesta;
var mensaje;
contadorIntentos = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
    numeroSecreto = (Math.random() * 100) + 1;
    numeroSecreto = parseInt(numeroSecreto);
    respuesta = numeroSecreto;
    console.log (numeroSecreto);

}

function verificar()
{
	var adivino;
  adivino = document.getElementById("numero").value;
  adivino = parseInt(adivino);
  console.log(adivino);
  if(adivino == respuesta) {

	contadorIntentos = contadorIntentos + 1;
    document.getElementById("intentos").value = contadorIntentos;
	
	switch (contadorIntentos) {

        case 1:
			mensaje = "Usted es un Psíquico"
            break;
        case 2:
            mensaje = "Excelente percepción"
            break;
        case 3:
			mensaje = "Esto es suerte"
            break;
        case 4:
			mensaje = "Excelente técnica"
            break;
        case 5:
			mensaje = "Usted está en la media"
            break;
        case 6:
        case 7:
        case 8:
		case 9:
		case 10:
            mensaje = "Falta técnica"
            break;
        default:
            mensaje = "Afortunado en el amor!!."
			break;
	}	

	alert("Usted ha ganado en " + contadorIntentos + " intentos. " + mensaje);
    

  } else {

      if(adivino < respuesta) {

        contadorIntentos = contadorIntentos + 1;
        document.getElementById("intentos").value = contadorIntentos;
        alert("Falta... ");
      } else {

        contadorIntentos = contadorIntentos + 1;
        document.getElementById("intentos").value = contadorIntentos;
        alert("Se pasó... ");
      }
  } 
  console.log(adivino);
  console.log(contadorIntentos);
  console.log(respuesta);
	

}