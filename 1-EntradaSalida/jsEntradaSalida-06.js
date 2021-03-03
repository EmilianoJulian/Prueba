/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// declaramos
	var PrimerN ;

	var SegundoN ;

	var numerounoparseado ;

	var numerodosparseado ;

	//asignar
	PrimerN = txtIdNumeroUno.value ;

	SegundoN = txtIdNumeroDos.value ;

	//transformar en enteros

	numerounoparseado = parseInt (PrimerN) ;
	
	numerodosparseado =	parseInt (SegundoN) ;

	suma = (numerounoparseado + numerodosparseado) ;

	alert ("La suma es " + suma ) ;

}

