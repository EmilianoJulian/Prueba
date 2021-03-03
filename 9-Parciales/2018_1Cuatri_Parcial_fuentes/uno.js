
function mostrar()
{
	var mensaje = ("A continuacion por favor coloque las medidas de su rectangulo")

	alert (mensaje)

	var ancho

	var largo

	ancho = prompt ("Aqui coloque el ancho del rectangulo")

	largo = prompt ("Ahora coloque el largo de su rectangulo")

	var anchoparseado

	var largoparseado

	anchoparseado = parseInt (ancho)

	largoparseado = parseInt (largo)

	var perimetro

	perimetro = (anchoparseado + anchoparseado + largoparseado + largoparseado)

	alert ("El perimetro de su rectangulo es " + perimetro)

}
