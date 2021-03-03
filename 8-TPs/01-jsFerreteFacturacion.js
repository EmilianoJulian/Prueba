/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecioIngresado ;
	var segundoPrecioIngresado ;
	var tercerPrecioIngresado ;

	var primerPrecioParseado ;
	var segundoPrecioParseado ;
	var tercerPrecioParseado ;

	var sumaDeTodo ;

	primerPrecioIngresado = txtIdPrecioUno.value ;
	segundoPrecioIngresado = txtIdPrecioDos.value ;
	tercerPrecioIngresado = txtIdPrecioTres.value ;

	primerPrecioParseado = parseInt (primerPrecioIngresado) ;
	segundoPrecioParseado = parseInt (segundoPrecioIngresado) ;
	tercerPrecioParseado = parseInt (tercerPrecioIngresado) ;

	sumaDeTodo = primerPrecioParseado + segundoPrecioParseado + tercerPrecioParseado ;

	alert ("La suma de todo es " + sumaDeTodo)

}
function Promedio () 
{
	var primerPrecioIngresado ;
	var segundoPrecioIngresado ;
	var tercerPrecioIngresado ;

	var primerPrecioParseado ;
	var segundoPrecioParseado ;
	var tercerPrecioParseado ;

	var promedioDeTodo

	primerPrecioIngresado = txtIdPrecioUno.value ;
	segundoPrecioIngresado = txtIdPrecioDos.value ;
	tercerPrecioIngresado = txtIdPrecioTres.value ;

	primerPrecioParseado = parseInt (primerPrecioIngresado) ;
	segundoPrecioParseado = parseInt (segundoPrecioIngresado) ;
	tercerPrecioParseado = parseInt (tercerPrecioIngresado) ;

	promedioDeTodo = (primerPrecioParseado + segundoPrecioParseado + tercerPrecioParseado) / 3 

	alert ("El promedio de todo es "+ promedioDeTodo)

}
function PrecioFinal () 
{
	var primerPrecioIngresado ;
	var segundoPrecioIngresado ;
	var tercerPrecioIngresado ;

	var primerPrecioParseado ;
	var segundoPrecioParseado ;
	var tercerPrecioParseado ;

	var sumaDeTodoMasIVA

	primerPrecioIngresado = txtIdPrecioUno.value ;
	segundoPrecioIngresado = txtIdPrecioDos.value ;
	tercerPrecioIngresado = txtIdPrecioTres.value ;

	primerPrecioParseado = parseInt (primerPrecioIngresado)
	segundoPrecioParseado = parseInt (segundoPrecioIngresado)
	tercerPrecioParseado = parseInt (tercerPrecioIngresado)

	sumaDeTodoMasIVA = (primerPrecioParseado + segundoPrecioParseado + tercerPrecioParseado) * 21 / 100

	alert ("El precio de los 3 mas IVAI al 21% es " + sumaDeTodoMasIVA )

}