/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */
				

function mostrar()
{

	var edad;
	var estCivil;

	edad = txtIdEdad.value;
	edad = parseInt (edad);

	estCivil = estadoCivil.value;
	/*estadoCivil = estadoCivil.value;*/

	//alert (estCivil)
	

	if (edad<18&&estCivil!="Soltero" )
	{
		alert ("Es muy pequeño para no ser soltero");
	}
	//if (edad>18&&estCivil=="Soltero")

}//FIN DE LA FUNCIÓN