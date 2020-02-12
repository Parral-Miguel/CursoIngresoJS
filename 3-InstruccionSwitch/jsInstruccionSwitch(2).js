function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {

        case "Julio":
        case "Agosto":
            mensaje = "Abrigate que hace frio"
            break;
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Mayo":
        case "Abril":
        case "Junio":
            mensaje = "Falta para el invierno"
            break;
        default:
            mensaje = "Ya pasamos el frio, ahora calor!!!."
            break;

}
    console.log(mesDelAño);
    console.log(mensaje);
    alert (mensaje);

}//FIN DE LA FUNCIÓN