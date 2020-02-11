function mostrar()
{
//tomo la edad  

    var edad;
    var civil;
    
    edad = document.getElementById("edad").value;
    civil = document.getElementById("estadoCivil").value;

    if(edad < 18 && civil != "Soltero") {
        
        alert("Usted es muy joven para NO ser soltero");
         
    }	


}//FIN DE LA FUNCIÓN