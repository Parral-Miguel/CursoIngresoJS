/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
    var temperatura;
    var conversion;
    var string1;
    var string2;

function FahrenheitCentigrados () 
{
    temperatura = document.getElementById("Temperatura").value;
    temperatura = parseInt(temperatura);

    conversion = (temperatura - 32) * (5/9);
    string1 = " grados farenheit son ";
    string2 = " grados centígrados";
    alert (temperatura + string1 + conversion + string2);
    // formula es (32 °F − 32) × 5/9 = 0 °C

}

function CentigradosFahrenheit () 
{
    temperatura = document.getElementById("Temperatura").value;
    temperatura = parseInt(temperatura);

    conversion = (temperatura * (9/5)) + 32;
    string1 = " grados centígrados son ";
    string2 = " grados farenheit";
    alert (temperatura + string1 + conversion + string2);
	// formula es (0 °C × 9/5) + 32 = 32 °F
}
