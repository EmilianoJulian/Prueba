/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{

	var Numero1pedido;
	var Numero2pedido;
	var NumerosSumado

	Numero1pedido= prompt ("Ingrese un numero");
	Numero2pedido= prompt ("Ingrese otro numero");

	Numero1pedido= parseInt Numero1pedido;
	Numero2pedido= parseInt Numero2pedido;

	NumerosSumado= Numero1pedido + Numero2pedido;

	alert ("La suma de los dos numeros ingresados es " + NumerosSumado);

}

