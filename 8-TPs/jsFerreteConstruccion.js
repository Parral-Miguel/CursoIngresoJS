/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

    var largo;
    var ancho;
    var radio;
    var per;
    var area;
    var cemento;
    var cal;

function Rectangulo () 
{
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    per = (2 * (largo + ancho)) * 3;
    
    alert("El hilo necesario es " + per + " metros");
}
function Circulo () 
{
    radio = document.getElementById("Radio").value;

    radio = parseInt(radio);
    per = 6 * 3.14 * radio;

    alert("El hilo necesario es " + per + " metros");

}
function Materiales () 
{
    var str1;
    var str2;
    var str3;
    var str4;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3;

    str1 = "Se necesitan "
    str2 = " bolsas de cemento y "
    str3 = " de cal para un area de "
    str4 = " metros."

    alert(str1 + cemento + str2 + cal + str3 + area + str4);
}