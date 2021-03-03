/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o 	niño (menor a 13 años).*/

function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt (edad);

	if (edad > 17)
		{//abro edad mayor 17
			alert("Usted es mayor de edad y se tiene que buscar un trabajo")
		}//cierro edad mayor de 17
		else
		{	if (edad >=13 && edad <=17)/*abreo else del if "mayor a 17"*/
			{//abro edad entre 13 y 17
			alert ("Usted es un adolescente, tiene constantes cambios repentinos, se cree el mejor pero en realidad es idiota")
			}//cierro edad entre 13 y 17
			else
			{//abro else del if "entre 13 y 17"
			alert ("Usted es un niño y tiene que estudiar mucho")
			}//cierro else del if "entre 13 y 17"
		}//cierro else del if "mayor a 17"




}//FIN DE LA FUNCIÓN