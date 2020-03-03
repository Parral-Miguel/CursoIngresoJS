//ingresar notas    y pedir sexo
//buscar la nota mas baja y el sexo, los varones con 6 o +, y el promedio total
//validar todo

function mostrar()
{
    var contador = 0;
    var nota;
    var sexo;
    var menorSexo;
    var menorNota;
    var promocionVarones = 0;
    var sumaNotas = 0;
    var promedio;

    while (contador < 5) {
        
        nota = prompt("Ingrese las notas");
        nota = parseInt(nota);
        
        // valido notas
        
        while(isNaN(nota) || nota < 0 || nota > 10) {
            nota = prompt("Ingrese una nota valida");
            nota = parseInt(nota);
        }

        sexo = prompt("ingrese el sexo del alumno");
        
        // valido sexo

        while(sexo != "f" && sexo != "m") {
            sexo = prompt("Ingrese un sexo valido");
        }
        // busco la menor nota y el sexo
        
        if (contador == 0) {
            menorNota = nota;
            menorSexo = sexo;
        } else if (nota < menorNota) {
            menorNota = nota;
            menorSexo = sexo;
        } 
        // calculo varones que promocionan
        
        if (sexo == "m" && nota >= 6){
            promocionVarones++
        }
        
        sumaNotas = sumaNotas + nota;
        contador++
        }
    // saco el promedio

    promedio = sumaNotas / contador;

    //muestro resultados
    
    alert("El promedio es de " + promedio);
    alert("La nota mas baja fue de " + menorNota + ". Sexo: " + menorSexo );
    alert("Promocionarion " + promocionVarones + " varones.");

}
