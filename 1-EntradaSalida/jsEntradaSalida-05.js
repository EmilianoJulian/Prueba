/*en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto , el importe y tambien se debe pedir el porcentaje de descuento al usuario, 
mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"*/
function mostrarAumento()
{
	var nombreProducto;
	var importeProducto ; 
	var importeProductoParseado

	var porcentajeDescuento;
	var porcentajeDescuentoParseado;

	var resultado

	nombreProducto = txtIdImporte.value;


	importeProducto = txtIdResultado.value;
	importeProductoParseado = parseInt (importeProducto);

	porcentajeDescuento = prompt ("Ponga aqui el porcentaje de descuento que quiera hacer ");
	porcentajeDescuentoParseado = parseInt (porcentajeDescuento)


	resultado = ( importeProductoParseado * porcentajeDescuentoParseado /100) ;

	alert("Usted compro un " + nombreProducto + " con " + porcentajeDescuentoParseado + "%" + " de descuento, el precio final es " + resultado) ;

}

