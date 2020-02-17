var eleccionMaquina;
var maquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
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

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (maquina) {
        case "Piedra":
			resultado = "Empate";
			ContadorDeEmpates = ContadorDeEmpates + 1;
            break;
        case "Tijera":
			resultado = "Ganó!";
			ContadorDeGanadas = ContadorDeGanadas + 1;
            break;
        case "Papel":
			resultado = "Perdio...";
			ContadorDePerdidas = ContadorDePerdidas + 1;
            break;
	}
	console.log(ContadorDeEmpates);
	console.log(ContadorDePerdidas);
	console.log(ContadorDeGanadas);
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("empatadas").value = ContadorDeEmpates;
    alert(resultado);

}//FIN DE LA FUNCIÓN
function papel()
{
	switch (maquina) {
        case "Papel":
			resultado = "Empate";
			ContadorDeEmpates = ContadorDeEmpates + 1;
            break;
        case "Piedra":
			resultado = "Ganó!";
			ContadorDeGanadas = ContadorDeGanadas + 1;
            break;
        case "Tijera":
			resultado = "Perdio...";
			ContadorDePerdidas = ContadorDePerdidas + 1;
			break;
			
	}
	console.log(ContadorDeEmpates);
	console.log(ContadorDePerdidas);
	console.log(ContadorDeGanadas);
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("empatadas").value = ContadorDeEmpates;
    alert(resultado);
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (maquina) {
        case "Tijera":
			resultado = "Empate";
			ContadorDeEmpates = ContadorDeEmpates + 1;
            break;
        case "Papel":
			resultado = "Ganó!";
			ContadorDeGanadas = ContadorDeGanadas + 1;
            break;
        case "Piedra":
			resultado = "Perdio...";
			ContadorDePerdidas = ContadorDePerdidas + 1;
            break;
    }
	alert(resultado);
	console.log(ContadorDeEmpates);
	console.log(ContadorDePerdidas);
	console.log(ContadorDeGanadas);
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("empatadas").value = ContadorDeEmpates;
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	
}