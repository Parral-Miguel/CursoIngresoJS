function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {

    case "Febrero":
        mensaje = "Este mes tiene 28 dias";
        break;

    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Octubre":
    case "Julio":   
    case "Diciembre":
    case "Agosto":
        mensaje = "Este mes tiene 31 dias";
        break;
    
    default:
        mensaje = "Este mes tiene 30 dias"
        break;	
    }
    alert (mesDelAño + ": "+ mensaje);
}//FIN DE LA FUNCIÓN