function mostrar()
{
//tomo la edad  

    var edad;

    edad = document.getElementById("edad").value;

    if(edad >= 18) {
    
            alert("La persona es mayor de edad");
    } else { 
    
        if(edad <= 17 && edad >= 13) {
            
            alert("La persona es un adolescente");  
        } else {  
    
            if(edad == "") {
            
                alert("No me ingresaste nada")
    
            } else {
            
                alert("La persona es menor de edad");
    } } }


}//FIN DE LA FUNCIÓN