/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var contador=0;
	var flag=true;
	//iniciar variables
	do
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);


		if(contador==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			contador++;
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			else 
			{
				if (numeroIngresado<numeroMinimo) 
				{
					numeroMinimo=numeroIngresado;
				}
			}
		}

		flag=confirm("Continuara?");

	}while(flag)
	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN