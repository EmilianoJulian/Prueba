/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var positivos;
	var negativos;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;

	var numeroIngresado;

	do
	{
		numeroIngresado=prompt("Ingrese un numero.");
		numeroIngresado=parseInt(numeroIngresado);
		
		if (numeroIngresado>0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			if(numeroIngresado<0)
			{
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			}
		}
		respuesta=confirm("Continuar?")
	} while (respuesta)

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN