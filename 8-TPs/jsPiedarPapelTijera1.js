/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var maquina;
var resultado;
function comenzar()
{
	eleccionMaquina = (Math.random() * 3) + 1;
    eleccionMaquina = parseInt(eleccionMaquina);
    switch (eleccionMaquina) {

        case 1:
			maquina = "Piedra";
            break;
        case 2:
            maquina = "Papel";
            break;
        case 3:
            maquina = "Tijera";
            break;
        }
        console.log(maquina);
}//FIN DE LA FUNCIÓN}

function piedra()
{
	switch (maquina) {
        case "Piedra":
			resultado = "Empate";
            break;
        case "Tijera":
            resultado = "Ganó!";
            break;
        case "Papel":
            resultado = "Perdio...";
            break;
    }
    alert(resultado);
    comenzar();
    
}//FIN DE LA FUNCIÓN
function papel()
{
    switch (maquina) {
        case "Papel":
			resultado = "Empate";
            break;
        case "Piedra":
            resultado = "Ganó!";
            break;
        case "Tijera":
            resultado = "Perdio...";
            break;
    }
    alert(resultado);
    comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
    switch (maquina) {
        case "Tijera":
			resultado = "Empate";
            break;
        case "Papel":
            resultado = "Ganó!";
            break;
        case "Piedra":
            resultado = "Perdio...";
            break;
    }
    alert(resultado);
    comenzar();

}//FIN DE LA FUNCIÓN