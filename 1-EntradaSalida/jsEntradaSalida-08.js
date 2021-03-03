/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var primerNumeroIngresado

	var segundoNumeroIngresado

	var primerNumeroParseado

	var segundoNumeroParseado

	primerNumeroIngresado = txtIdNumeroDividendo.value

	segundoNumeroIngresado = txtIdNumeroDivisor.value

	primerNumeroParseado = parseInt (primerNumeroIngresado)

	segundoNumeroParseado= parseInt (segundoNumeroIngresado)

	alert (primerNumeroParseado % segundoNumeroParseado)
}
