function mostrar()
{

    var sexo = prompt("Ingrese f ó m .");
    var contador = 0;

    while ((sexo != "f") && (sexo != "m") && (contador <2)) {
        var sexo = prompt("Ingrese una opción válida.")
        contador++;        
}
    if ((sexo != "f") && (sexo != "m")) {
        document.getElementById('Sexo').value="Opciones incorrectas";    
    } else {
        document.getElementById('Sexo').value=sexo;
    }    
}//FIN DE LA FUNCIÓN