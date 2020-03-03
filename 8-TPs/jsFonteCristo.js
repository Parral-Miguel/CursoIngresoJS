/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var numero;

function ComenzarIngreso () 
{
    numero = document.getElementById("numero").value;

    numero = parseInt(numero);

    while (isNaN(numero) || numero <= 0){

        numero = prompt ("Ingrese un valor valido");
        numero = parseInt(numero);
    }
}

function NumerosPares() {
    ComenzarIngreso();
    
    var contador = numero + 1;
    var contadorPar = 0;

    while (contador > 0){
        contador--;
        
        if ((contador % 2) == 0 && contador != 0) {
            contadorPar++
            console.log(contador);
        }
    }
    console.log(contadorPar);

}

function NumerosImpares()
{
    ComenzarIngreso();
    
    var contador = numero + 1;
    var contadorImpar = 0;

    while (contador > 0){
        contador--;
        
        if ((contador % 2) == 1) {
            contadorImpar++
            console.log(contador);
        }
    }
    console.log(contadorImpar);
}

function NumerosDivisibles()
{
    ComenzarIngreso();
    var contador = 0;
    var contadorDivisibles = 0;

    while (contador < 100) {

        if (numero % contador == 0){
            contadorDivisibles++;
        }    
        contador ++;
    }
    console.log(contadorDivisibles);
}

function VerificarPrimo()
{
    ComenzarIngreso();
    var contador = 2;
    var noesPrimo = false;
    var checkeador = numero/2;

    while (contador < checkeador) {

        if (numero % contador == 0){
            noesPrimo = true
            break;
        }    
        contador++;
    }
    if (noesPrimo) {
        alert("el numero no es primo");
    } else {
        alert("el numero es primo");
    }
}
 // falta terminar
function NumerosPrimos()
{
    ComenzarIngreso();
    var contador = 1;
    var contadorPrimos = 2
    var noesPrimo = false
    while (contador <= numero){

        while (contadorPrimos < contador){
            if (numero % contador == 0){
                noesPrimo = true
                break;
            }    
            contador++;
        }
    }
    
}