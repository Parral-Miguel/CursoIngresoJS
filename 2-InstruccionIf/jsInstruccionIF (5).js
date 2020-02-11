function mostrar()
{
//tomo la edad  

    var edad;

    edad = document.getElementById("edad").value;

    if(!(edad <= 17 && edad >= 13)) {

        alert("la persona no es adolescente")

    /* negarlo es una solucion pero tambien puedo poner un OR

    if(edad < 13 || edad > 17) {

        alert("la persona no es adolescente")
    } 
    */ 
}

}//FIN DE LA FUNCIÓN