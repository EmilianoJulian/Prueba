/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % 
y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var lamparaCompradas;
     var marcaLampara;
     var descuento;
     var precioLampara=35;
     var precioTodasLamparasCompradas;
     var precioFinal;
     var ingresosBrutos;
     var precioFinalConIIBB;

     lamparasCompradas=txtIdCantidad.value;
     marcaLampara=Marca.value;

     lamparasCompradas= parseInt (lamparasCompradas);
     precioTodasLamparasCompradas= parseInt (precioTodasLamparasCompradas);

     switch (lamparaCompradas){
        case 6:
            descuento=0.50
            break;
        case 5:
            switch (marcaLampara){
                case "ArgentinaLuz":
                    descuento=0.40
                    break;
                default:
                    descueto=0.30
                    break;
            }
            break;
        case 4:
            switch (marcaLampara){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=0.25
                    break;
                default:
                    descuento=0.20
                    break;
            }
            break;
        case 3:
            switch (marcaLampara){
                case "ArgentinaLuz":
                    descuento=0.15
                    break;
                case "FelipeLamparas":
                    descuento=0.10
                    break;
                case "JeLuz":
                case "HazIluminacion":
                case "Osram":
                    descuento=0.5
                    break;
            }
            break;
        case 2:
        case 1:
            descuento=1
            break;
 }
    precioTodasLamparasCompradas = precioLampara * lamparasCompradas;
    alert(precioTodasLamparasCompradas);
    precioFinal= precioTodasLamparasCompradas * descuento;
    alert(precioFinal)
    /*ingresosBrutos= precioFinal * 1.10;
    precioFinalConIIBB= precioFinal * ingresosBrutos;
    txtIdprecioDescuento.value=precioFinal;

    if (precioFinal>120)
    {
        alert("Usted pago "+ precioFinalConIIBB +" de IIBB")
    }*/
}
/*
    var lamparasCompradas;
    var descuento;
    var descuentoFinal;
    var precioFinal;
    var precioUnitarioLampara = 35;
    var marcaLampara;
    var importeTotal;
    var cantidadIIBB;
    //var calculo;

    lamparasCompradas = txtIdCantidad.value;
    lamparasCompradas = parseInt (lamparasCompradas);

    marcaLampara = Marca.value;

    //calculo = h

    //alert (marcaLampara);
    //alert(lamparasCompradas)

    if (lamparasCompradas>5)
    {
        descuento = 50;
    }
    else
    {
        //Menor o = 5
        //Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        if(lamparasCompradas == 5)
        {
            if(marcaLampara == "ArgentinaLuz")
            {
               descuento = 40;
            }
            else
            {
                descuento = 30;
            }
        }
        else
        {
            if(lamparasCompradas == 4)
            {
                if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
                {
                    descuento = 25;
                }
                else
                {
                    descuento = 20;
                }
                else
                {
                    if(lamparasCompradas == 3)
                    {
                        if(marcaLampara == "ArgentinaLuz")
                        {
                            descuento = 15;
                        }
                        else if (marcaLampara == "FelipeLamparas")
                        {
                            descuento = 10;
                        }
                        else 
                        {
                            descuento = 5;
                        }
                    }
                    else
                    {
                        descuento = 0;
                    }
                }
            }
        }
    };

    precioFinal = lamparasCompradas * precioUnitarioLampara;
    descuentoFinal = precioFinal * descuento / 100;
    importeTotal = precioFinal - descuentoFinal;

    if (importeTotal > 120)
    {
        cantidadIIBB=importeTotal*10/100
        alert ("Usted pago "+ cantidadIIBB +" de IIBB.")
    }


*/