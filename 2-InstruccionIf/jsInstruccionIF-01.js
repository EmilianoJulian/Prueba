/*Al ingresar una edad que sea igual a 15,
 mostrar el mensaje "niña bonita".*/

function mostrar()
{

	var edad;


	edad = txtIdEdad.value; //string

	edad = parseInt	(edad);//parse-float

	if (edad==15)
		{
			alert("Niña bonita")
		};

	if (edad!=15)
		{
			alert ("Viejo verde")
		};


	

}//FIN DE LA FUNCIÓN