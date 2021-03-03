function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numeroAleatorio;

	numeroAleatorio = Math.floor(Math.random() * 101)+1;

	if (numeroAleatorio<11)
		{
			alert (numeroAleatorio)
		}
		else{
			alert ("prueba de que no esta entre 1-10")
		};

}//FIN DE LA FUNCIÓN