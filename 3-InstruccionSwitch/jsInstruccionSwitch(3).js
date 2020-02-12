function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {	

    case "Febrero":
    mensaje = "Este mes no tiene mas de 29 dias.";
    break;

    default: 
    mensaje = "Este mes tiene 30 o mas dias.";
    }
    
    console.log(mesDelAño);
    console.log(mensaje);
    alert (mensaje);
} //FIN DE LA FUNCIÓN