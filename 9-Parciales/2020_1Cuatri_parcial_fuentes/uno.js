/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
	//La carga de 5 productos, por cada producto se da una vuelta al for. Por ende 5 vueltas.
	//Cosas a pedir y su validacion
	/*
	tipoProducto(SOLO "Barbijo","Jabon","Alcohol")
	precioUnitarioProducto(precioUnitarioProducto>=100&&precioUnitarioProducto<=300)
	cantidadUnidadesProducto(cantidadUnidadesProducto>0&&cantidadUnidadesProducto<=1000)
	marcaProducto
	fabricanteProducto
	*/
	var tipoProducto;
	var precioUnitarioProducto;
	var cantidadUnidadesProducto;
	var marcaProducto;
	var fabricanteProducto;

	var maxPrecioJabon;
	var contadorJabon=0;
	var fabricanteJabonMasCaro;

	var contadorbarbijo=0;

	for (var i = 0; i <= 5; i++) 
	{

		tipoProducto=prompt("Ingrese el producto que desea llevar: ");
		while (tipoProducto!=barbijo||tipoProducto!=jabon||tipoProducto!=alcohol)
		{
			tipoProducto=prompt("El producto que usted ingreso no es valido. Ingrese su producto: ");
		}

		precioUnitarioProducto=prompt("Ingrese el precio unitario de su producto: ");
		precioUnitarioProducto=parseInt(precioUnitarioProducto);
		while (!(precioUnitarioProducto>=100&&precioUnitarioProducto<=300))
		{
			precioUnitarioProducto=prompt("El precio que usted ingreso no es valido. Ingrese el precio: ")
		}

		cantidadUnidadesProducto=prompt("Ingrese la cantidad de unidades que desea llevar de "+tipoProducto+": ");
		cantidadUnidadesProducto=parseInt(cantidadUnidadesProducto);
		while (!(cantidadUnidadesProducto>0&&cantidadUnidadesProducto<=1000))
		{
			cantidadUnidadesProducto=prompt("La cantidad de unidades que ingreso no es valido. Ingrese la cantidad de unidades: ")
		}

		marcaProducto=prompt("Ingrese la marca de su producto: ");
		while (isNaN(marcaProducto)==false)
		{
			marcaProducto=prompt("La marca que usted ingreso no es valida. Ingrese la marca del producto: ")
		}

		fabricanteProducto=prompt("Ingrese el fabricante de su producto: ");
		while (isNaN(fabricanteProducto)==false)
		{
			fabricanteProducto=prompt("El fabricante que usted ingreso no es valido. Ingrese el frabricante del producto: ")
		}	
		//A)El mas caro de los jabones
		/*
		Guardar:precioUnitarioProducto-marca-fabricante-cantidadUnidades
		*/
		if (tipoProducto==jabon)
		{
			while(contadorJabon==cantidadUnidadesProducto)
			{
				maxPrecioJabon=precioUnitarioProducto;
				if (maxPrecioJabon<precioUnitarioProducto)
				{
					maxPrecioJabon=precioUnitarioProducto;
				}
				fabricanteJabonMasCaro=fabricanteProducto;
				contadorJabon++
			}
		}
		//B)
		/*
		Producto mas comprado-promedio por compra
		*/

		//C)
		/*
		Total de barbijos comprados
		*/
		if (tipoProducto==barbijo)
		{
			while (cantidadUnidadesProducto==contadorbarbijo)
			{
			contadorbarbijo++;
			}
		}
	}
	alert(maxPrecioJabon+contadorJabon+fabricanteJabonMasCaro);
	alert("Este es el punto b xd");
	alert(contadorbarbijo);
}

