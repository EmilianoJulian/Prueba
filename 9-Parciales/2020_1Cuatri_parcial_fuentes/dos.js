/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
 
	var tipoProducto;
	var cantidadProducto;
	var precioProducto;
	var descuento;

	tipoProducto=prompt("Ingrese el producto");
	while (tipoProducto!="arena"||tipoProducto!="cal"||tipoProducto!="cemento") 
	{
	  	tipoProducto=prompt("Usted ingreso mal el producto. ¡Ingresarlo bien!");
	}
	
	cantidadProducto=prompt("Cuantos quiere comprar?");
	cantidadProducto=parseInt(cantidadProducto);
	  
	precioProducto=prompt("Precio del producto unitario");
	precioProducto=parseInt(precioProducto);
	while (precioProducto<1)
	{
		precioProducto=prompt("usted no ingreso un pecio del producto valido. ¡Ingresalo bien!");
		precioProducto=parseInt(precioProducto);
	}

		  
	//A)
	var importeTotal;

	//B)
	var importeTotalConDescuento;
	//D)

	var ProductoMasComprado;

	//F)
	var productoMasCaro;

}
