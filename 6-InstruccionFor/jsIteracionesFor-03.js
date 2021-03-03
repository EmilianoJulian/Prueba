/*
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{

	var vecesRepiteMensaje;

	vecesRepiteMensaje=prompt("Cuantas veces quiere que aparezca el mensaje?");
	vecesRepiteMensaje=parseInt(vecesRepiteMensaje);

	for (var i = vecesRepiteMensaje; i != 0; i--) {
		console.log ("i se esta repitiendo, veces: "+i);
	}

}//FIN DE LA FUNCIÓN