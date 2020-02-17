/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var respuesta;
contadorIntentos = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
    var numeroSecreto;
  
    numeroSecreto = (Math.random() * 100) + 1;
    numeroSecreto = parseInt(numeroSecreto);
    respuesta = numeroSecreto;
    console.log (numeroSecreto)

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
    alert("Usted ha ganado! En solo " + contadorIntentos + "intentos!");

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