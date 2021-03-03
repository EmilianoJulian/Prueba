/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final.

en Invierno: bariloche tiene un aumento del 20%, cataratas y Cordoba tiene un descuento del 10%, Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y
 Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var descuento 
	var aumento
	var precioTotal
	var precioBase =15000

	//alert(estacionIngresada);
	//alert (destinoIngresado);

	switch (estacionIngresada){
		case "Invierno":
			switch (destinoIngresado){
				case "Bariloche":
					aumento=1.20
					break;
				case "Cataratas":
				case "Cordoba":
					descuento=0.90
					break;
				case "Mar del plata":
					descuento=0.80
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado){
				case "Bariloche":
					descuento=0.80
					break;
				case "Cataratas":
				case "Cordoba":
					aumento=1.10
					break;
				case "Mar del plata":
					aumento =1.20
					break;
			}
			break
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado){
				case "Bariloche":
				aumento =1.10
				break;
				case "Cataratas":
				aumento =1.10
				case "Mar del plata":
				aumento=1.10
				case "Cordoba":
				aumento=1
			}
	}

	precioTotal = precioBase *(aumento||descuento)
	alert (precioTotal)

}//FIN DE LA FUNCIÓN