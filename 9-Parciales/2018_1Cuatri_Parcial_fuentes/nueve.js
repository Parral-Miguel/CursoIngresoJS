//

function mostrar()
{   var sexo;
    var edad;
    var respuesta;
    var pasaje;
    var mayorEdad;
    var mayorSexo;
    var mayorPasaje;
    var menorNacional = false;
    var mayorNombre;
    var nombreJoven;
    var menorEdad;
    var mujeresUrbano = 0;
    var contadorMujeres = 0;
    var contadorVarones = 0;
    var sumaMujeres = 0;
    var sumaVarones = 0;
    var promedioVarones;
    var promedioMujeres;
    var primerValor = true;
    var nombre;

    do {
        nombre = prompt("Ingrese su nombre");
        
        while (nombre == null || nombre == "") {
            nombre = prompt("Ingrese su nombre");
        }
        
        edad = prompt("Ingrese la edad");
        edad = parseInt(edad);
        
        while (isNaN(edad) || edad <= 18) {
            edad = prompt("Solo se admiten mayores de 18");
            edad = parseInt(edad);
        }
        
        sexo = prompt("Ingrese el sexo");
        
        while (sexo != "m" && sexo != "f") {
            sexo = prompt("Ingrese una opción valida");
        }

        pasaje = prompt("Ingrese el pasaje");
        
        while (pasaje != "nacional" && pasaje != "urbano" && pasaje != "internacional") {
            pasaje = prompt("Ingrese una opción valida");
        }

        if (primerValor) {
            
            mayorEdad = edad;
            menorEdad = edad;
            mayorPasaje = pasaje;
            mayorSexo = sexo;

            primerValor = false;

        } else if (edad > mayorEdad) {
            
            mayorEdad = edad;
            mayorPasaje = pasaje;
            mayorSexo = sexo;
        } 
        if ((pasaje == "nacional") && (edad <= menorEdad) && (sexo == "m")) {
            menorEdad = edad;
            menorNacional = true;
            nombreJoven = nombre;
        }
        if (sexo == "f" && (pasaje == "nacional" || pasaje == "urbano")) {
            mujeresUrbano++;
        } 
        if (sexo == "f") {
            contadorMujeres++;
            sumaMujeres = sumaMujeres + edad;

        } else if (sexo == "m" && pasaje == "internacional") {
            contadorVarones++;
            sumaVarones += sumaVarones + edad;
        }
        
       respuesta = confirm("Continuar ingresando?")
       
    } while (respuesta);

    if (contadorMujeres == 0) {
        promedioMujeres = 0;

    } else {
        promedioMujeres = sumaMujeres / contadorMujeres;
    }
    
    if (contadorVarones == 0) {
        promedioVarones = 0;

    } else {
        promedioVarones = sumaVarones / contadorVarones;
    }
    

    if (menorNacional) {

        document.write ("El hombre mas joven con este pasaje se llamaba " + nombreJoven);
        document.write ("<br>");

    } else {

        document.write ("No habia un hombre con pasaje nacional");
        document.write ("<br>");
        
    }
    
    document.write ("Sexo y pasaje del mas viejo: " + mayorSexo + ". " + mayorPasaje);
    document.write ("<br>");    
    document.write ("Cantidad de mujeres en esta categoría: " + mujeresUrbano);
    document.write ("<br>");    

    if (promedioMujeres == 0){

        document.write ("No hubo mujeres ingresadas en el programa");  
        document.write ("<br>");

    } else {

        document.write ("Promedio de la edad de las mujeres: " + promedioMujeres);
        document.write ("<br>");     
    }
    
    if (promedioVarones == 0){

        document.write ("No hubo varones con pasaje internacional");    
        document.write ("<br>"); 

    } else {

        document.write ("Promedio de la edad de los varones con este pasaje: " + promedioVarones);
        document.write ("<br>");        
    }

    }   
