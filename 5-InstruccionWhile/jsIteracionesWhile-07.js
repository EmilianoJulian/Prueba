/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var respuesta;
	var primerNumeroPedido;
	var segundoNumeroPedido;
	var resultado;

	contador=0;

	respuesta='si';

	while(respuesta=="si"){
		primerNumeroPedido=prompt("Ingrese un numero ");
		primerNumeroPedido=parseInt(primerNumeroPedido);

		segundoNumeroPedido=prompt("Ingrese un numero ");
		segundoNumeroPedido=parseInt(segundoNumeroPedido);

		resultado=primerNumeroPedido+segundoNumeroPedido;

		respuesta=prompt("Desea seguir sumando numeros? 'Ingrese si o no'")

		contador=contador+2;
	}

	txtIdSuma.value=resultado;
	txtIdPromedio.value=resultado/contador;

}//FIN DE LA FUNCIÓN