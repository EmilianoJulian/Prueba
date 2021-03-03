/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	var numeroIngresado;
	var contadorNumerosPares=0;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for (var i=1;i<=numeroIngresado;i++)
	{

		if (i%2==0) 
		{
			alert ("El numero "+i+" es par.");
			contadorNumerosPares++;
		}

	}
	alert ("La cantidad de pares que hay es de "+contadorNumerosPares)
}//FIN DE LA FUNCIÓN