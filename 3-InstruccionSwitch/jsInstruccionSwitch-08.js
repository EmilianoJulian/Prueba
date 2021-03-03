/*
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);

	switch (destinoIngresado){
		case "Mar del plata":
			alert ("El destino que usted ingreso hace normalmente calor");
			break;
		case "Bariloche":
			alert ("El destino que usted ingreso hace normalmente frio");
			break;
		case "Cataratas":
			alert ("El destino que usted ingreso hace normalemnte calor");
			break;
		case "Ushuaia":
			alert ("El destino que usted ingreso hacer normalmente frio");
			break;

	}

}//FIN DE LA FUNCIÓN