function mostrar()
{
//tomo la edad  

    var edad;

    edad = document.getElementById("edad").value;

    if(edad <= 17 && edad >= 13) {
    
        alert("La persona es un adolescente");  
    } else {

    if(edad == "") {

        alert("no me ingresaste nada")
    }
}

}//FIN DE LA FUNCIÓN