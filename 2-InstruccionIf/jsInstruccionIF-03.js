/*Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/

function mostrar()
{
	
	var edad; 

	edad = txtIdEdad.value;
	edad = parseInt (edad);

	if (edad < 18)
		{
			alert ("Usted es menor de edad, no tome alcohol :(")
		}
	else{
			alert ("Usted es mayor de edad, tome alcohol :)")
		};

	/*if (edad < 18)
		{alert ("Usted es menor de edad, no tome alcohol :(")};

	if (edad >= 18)
		{alert ("Usted es mayor de edad, tome alcohol :)")};*/

}//FIN DE LA FUNCIÓN