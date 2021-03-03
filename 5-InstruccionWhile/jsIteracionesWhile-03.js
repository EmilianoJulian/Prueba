/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada!="utn750"){
		claveIngresada = prompt("La clave que ingreso no es correcta. Por favor ingrese nuevamente la clave. ");
	}
}//FIN DE LA FUNCIÓN
/*
Este es de juli
function mostrar()
{
    var controlador;
    controlador=prompt ("ingrese la clave de ayuda"); 
    
    while (controlador != "utn750")
    {
        alert ("Su clave de ayuda está mal ingresada. Si no vuelve a intentarlo, morirá en un loop infinito..");
        controlador = prompt("ingrese la clave de ayuda.....")
    }
    alert("usted necesita ayuda Ò____ó");
}
*/