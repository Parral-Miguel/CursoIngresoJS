
function mostrar()
{
    var largo;
    var ancho;
    var perimetro;

    largo = prompt("Ingrese el largo");
    ancho = prompt("ingrese el ancho");

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    while (isNaN(largo) || isNaN(ancho)) {
        largo = prompt("Valores incorrectos. Ingrese nuevamente");
        ancho = prompt("Valores incorrectos. Ingrese nuevamente");

        largo = parseInt(largo);
        ancho = parseInt(ancho);
    }

    perimetro = (largo * 2) + (ancho * 2);

    alert("El perímetro es " + perimetro);
}
