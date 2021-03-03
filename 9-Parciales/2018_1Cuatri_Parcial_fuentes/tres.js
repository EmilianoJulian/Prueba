function mostrar()
{
	var precioIngresado
	var porcentajeDescuento
	
	precioIngresado = prompt ("Ingrese su precio ")
	porcentajeDescuento = prompt ("Ingrese el porcentaje de descuento ")

	elPrecioFinal.value = precioIngresado * porcentajeDescuento / 100

}
