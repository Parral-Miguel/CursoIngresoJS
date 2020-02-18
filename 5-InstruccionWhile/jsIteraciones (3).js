function mostrar()
{
    var contador;
    contador = 0;
    var clave = prompt("Ingrese el número clave.");
    while (clave != "utn750") {
        contador++;
        clave = prompt("Incorrecto. Ingrese nuevamente");
        if (contador == 2) {
            break;
    }
}
    if (clave == "utn750") {
        alert("Clave correcta")
    } else {
        alert("intentos max");
    }
}//FIN DE LA FUNCIÓN
