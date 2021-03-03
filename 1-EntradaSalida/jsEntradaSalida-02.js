/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var numeroPedido;
	var contador = 0 ;
	var acumulador = 0;

	while (contador<5){
		numeroPedido = prompt ("Ingrese un numero");
		numeroPedido = parseInt (numeroPedido);

		acumulador = acumulador + numeroPedido;

		contador = contador +1;
	}
	alert ("La suma de los numeros que ingreso es " + acumulador)
}

	
/*var Numero1Pedido;
	var Numero2Pedido;
	var Numero3Pedido;
	var Numero4Pedido;
	var Numero5Pedido;
	var NumerosSumado;

	Numero1Pedido= prompt ("Ingrese un numero");
	Numero2Pedido= prompt ("Ingrese un numero");
	Numero3Pedido= prompt ("Ingrese un numero");
	Numero4Pedido= prompt ("Ingrese un numero");
	Numero5Pedido= prompt ("Ingrese un numero");

	Numero1Pedido= parseInt (Numero1Pedido);
	Numero2Pedido= parseInt (Numero2Pedido);
	Numero3Pedido= parseInt (Numero3Pedido);
	Numero4Pedido= parseInt (Numero4Pedido);
	Numero5Pedido= parseInt (Numero5Pedido);

	NumerosSumado= Numero1Pedido + Numero2Pedido + Numero3Pedido + Numero4Pedido + Numero5Pedido;

	alert ("La suma de los dos numeros ingresados es " + NumerosSumado);*/
