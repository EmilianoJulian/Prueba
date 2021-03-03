/*
Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);

	switch (destinoIngresado){
		case "Mar del plata":
			alert ("El punto cardinal de su destino se encuentra en el Este de Argentina");
			break;
		case "Bariloche":
			alert ("El punto cardinal de su destino se encuentra en el Oeste de Argentina");
			break;
		case "Cataratas":
			alert ("El punto cardinal de su destino se encuentra en el Norte de Argentina");
			break;
		case "Ushuaia":
			alert ("El punto cardinal de su destino se encuentra en el Suerte de Argentina");
			break;

	}

}//FIN DE LA FUNCIÓN