/*
Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar()
{
	var numeroIngresado;
	var contadorNumerosprimos=0;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for (var i=1;i<=numeroIngresado;i++)
	{

		if (numeroIngresado%i==0) 
		{
			contadorNumerosprimos++;
		}
	}

	if (contadorNumerosprimos==2)
		{
			alert("El numero que ingreso es primo: "+numeroIngresado);
		}
	else
	{
		alert("El numero "+numeroIngresado+" no es primo.");
	}
}//FIN DE LA FUNCIÓN