/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	/*var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";*/

	var numeroIngresado;

	var sumaNumerosNegativos;
	var cantidadNegativos=0;

	var numeroPositivo;
	var sumaNumerosPositivos;
	var cantidadPositivos=0;

	var cantidadCeros;

	if (numeroIngresado<0)
	{
		sumaNumerosNegativos= numeroIngresado+numeroIngresado;
		cantidadNegativos=cantidadNegativos+1;
	}
		else 
		{
			if (numeroIngresado>0)
			{
				sumaNumerosPositivos= numeroIngresado+numeroIngresado;
				cantidadPositivos=cantidadPositivos+1;
			}
			else
			{
				if (numeroIngresado==0)
				{
					cantidadCeros= cantidadCeros+1;
				}
			}
		}


	/*while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);*/
}//FIN DE LA FUNCIÓN