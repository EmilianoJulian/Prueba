/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ var largo ;
    var ancho ;
    var largoParseado ;
    var anchoParseado ;
    //var alambreX3 ;
    var perimetro ;
    largo = txtIdLargo.value ;
    ancho = txtIdAncho.value ;
    //alambreX3 = 3 ;
    largoParseado = parseFloat (largo) ;
    anchoParseado = parseFloat (ancho) ;
    
    perimetro = largoParseado + largoParseado + anchoParseado + anchoParseado
    alert ("La cantidad de alambre que debe comprar es " + perimetro * 3)
function Circulo () 
{
    
    var radio
    var radioParseado
    var X3
    var perimetro
    var pi= Math.PI
    radio = txtIdRadio.value
    radioParseado = parseFloat (radio)
    X3 = 3
    perimetro = 2*(pi * radio)
    alert ("La cabtidad de alambre que debe comprar es " + perimetro)
    
}

}
function Materiales () 
{
	
}