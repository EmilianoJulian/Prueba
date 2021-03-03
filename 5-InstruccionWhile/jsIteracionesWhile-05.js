/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	while (sexoIngresado != "f" && sexoIngresado != "m"){
		sexoIngresado= prompt ('El dato que usted ingreso no es "f" o "m"');
	}

	if (sexoIngresado=="f")
	{
		txtIdSexo.value="Femenino"
	}
	else
	{
		txtIdSexo.value="Masculino"
	}

	//txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN