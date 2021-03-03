/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
*"EXCELENTE" para notas igual a 9 o 10,
*"APROBÓ" para notas mayores a 4,
*"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{

	var numeroAleatorio;

	numeroAleatorio = Math.floor(Math.random() * 11)+1;

	if (numeroAleatorio>8)
	{
		alert(numeroAleatorio+" EXCELENTE")
	}
		else{
		if (numeroAleatorio<9&&numeroAleatorio>3)
		{
			alert(numeroAleatorio+" APROBÓ")
		}
			else{
			alert(numeroAleatorio+" Vamos, la proxima se puede")
			}
		};
}