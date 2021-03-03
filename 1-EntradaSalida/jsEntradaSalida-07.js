/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var PrimerNumeroIngresado ;	

	var SegundoNumeroIngresado ;

	var PrimerNumeroParseado ;

	var SegundoNumeroParseado ;

	PrimerNumeroIngresado = txtIdNumeroUno.value ;

	SegundoNumeroIngresado = txtIdNumeroDos.value ;

	PrimerNumeroParseado = parseInt (PrimerNumeroIngresado) ;

	SegundoNumeroParseado = parseInt (SegundoNumeroIngresado) ;

	suma = (PrimerNumeroParseado + SegundoNumeroParseado) ;

	alert ("La suma es " + suma) ;
}

function restar()
{
	var PrimerNumeroIngresado ;	

	var SegundoNumeroIngresado ;

	var PrimerNumeroParseado ;

	var SegundoNumeroParseado ;

	PrimerNumeroIngresado = txtIdNumeroUno.value ;

	SegundoNumeroIngresado = txtIdNumeroDos.value ;

	PrimerNumeroParseado = parseInt (PrimerNumeroIngresado) ;

	SegundoNumeroParseado = parseInt (SegundoNumeroIngresado) ;

	resta = (PrimerNumeroParseado - SegundoNumeroParseado) ;

	alert ("La resta es " + resta) ;
}

function multiplicar()
{ 
	var PrimerNumeroIngresado ;	

	var SegundoNumeroIngresado ;

	var PrimerNumeroParseado ;

	var SegundoNumeroParseado ;

	PrimerNumeroIngresado = txtIdNumeroUno.value ;

	SegundoNumeroIngresado = txtIdNumeroDos.value ;

	PrimerNumeroParseado = parseInt (PrimerNumeroIngresado) ;

	SegundoNumeroParseado = parseInt (SegundoNumeroIngresado) ;

	multiplicacion = (PrimerNumeroParseado * SegundoNumeroParseado) ;

	alert ("La multiplicacion es " + multiplicacion) ;
}

function dividir()
{
	var PrimerNumeroIngresado ;	

	var SegundoNumeroIngresado ;

	var PrimerNumeroParseado ;

	var SegundoNumeroParseado ;

	PrimerNumeroIngresado = txtIdNumeroUno.value ;

	SegundoNumeroIngresado = txtIdNumeroDos.value ;

	PrimerNumeroParseado = parseInt (PrimerNumeroIngresado) ;

	SegundoNumeroParseado = parseInt (SegundoNumeroIngresado) ;

	division = (PrimerNumeroParseado / SegundoNumeroParseado) ;

	alert ("La division es " + division);
	
}

