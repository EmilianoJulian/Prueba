/*
Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
function mostrar()
{
	var numeroPedido;

	for ( ; ; ) 
	{
		numeroPedido=prompt("ingrese un numero");
		numeroPedido=parseInt(numeroPedido);

		if (numeroPedido==9)
		{
			break;
		}
		alert("Usted ingreso el numero "+numeroPedido);
	}


}//FIN DE LA FUNCIÓN