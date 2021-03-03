/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{

	var numeroIngresado;
	var contadorNumerosdivisores=0;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for (var i=1;i<=numeroIngresado;i++)
	{

		if (numeroIngresado%i==0) 
		{
			contadorNumerosdivisores++;
			console.log (i);
		}
	}
	console.log("La cantidad de pares que hay es de "+contadorNumerosdivisores);

}//FIN DE LA FUNCIÓN