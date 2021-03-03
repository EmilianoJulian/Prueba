/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
Curso de ingreso UTN FRA
*/
function mostrar()
{
  var producto;
  var cantidadProducto;
  var precioProducto;

  var precioTotalPagarSinDescuento;

  var continuar;

  var descuento;

  var flag1=true;
  var flag2=true;

  var cantidadMaximabolsas;
  var tipoBolsa;

  var precioProductoMasCaro;
  var productoMasCaro;

	do
	{
	  	producto=prompt("Que producto lleva?");
	  	while (producto!="arena"&&producto!="cal"&&producto!= "cemento")
	  	{
	  		producto=prompt("El producto que usted ingreso no es valido. Que producto lleva?");
	  	}

	  	cantidadProducto=prompt("Cuantas bolsas lleva?");
	  	cantidadProducto=parseInt(cantidadProducto);
	  	while (cantidadProducto<0)
	  	{
	  		cantidadProducto=prompt("La cantidad de bolsas no es valido. Cuantas bolsas lleva?");
	  		cantidadProducto=parseInt(cantidadProducto);
	  	}

	  	precioProducto=prompt("Cual es el precio de su producto?");
	  	precioProducto=parseInt(precioProducto);
	  	while (precioProducto<0)
	  	{
	  		precioProducto=prompt("El precio que ingreso no es valido. Cual es el precio de su producto?");
	  		precioProducto=parseInt(precioProducto);
	  	}

	  	//A)
	  	precioTotalPagarSinDescuento=precioTotalPagarSinDescuento+precioProducto;

	  	//B) Se hace afuera.

	  	//D) 
	  	if (flag1==true)
	  	{
	  		cantidadMaximabolsas=cantidadProducto;
	  		tipoBolsa=producto;
	  		flag=false
	  	}
	  	else if (cantidadProducto>cantidadMaximabolsas)
	  	{
	  		cantidadMaximabolsas=cantidadProducto;
	  		tipoBolsa=producto;
	  	}

	  	if (flag2==true)
	  	{
	  		precioProductoMasCaro=precioProducto;
	  		productoMasCaro= producto;
	  		flag2=false
	  	}
	  	else if (precioProducto>precioProductoMasCaro)
	  	{
	  		
	  	}

	  	continuar=confirm("Continuara?");
	}while(continuar==true);

}
