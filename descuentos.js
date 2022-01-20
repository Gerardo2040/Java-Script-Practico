const precioOriginal = 300;
const descuento = 23;
const cupones = ["CP15","CPN20","CPN80"];


// console.log("Precio con Desc " + precioConDescuento);

function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDesc = 100 - descuento;
    return (precio * (porcentajePrecioConDesc)) / 100;
}

function onClickButtonPrecioCDescuento()
{
    const inputPrecio = document.getElementById("inputPrecio");        
    const inputCupon = document.getElementById("inputCupon");        

    const valPrecio = inputPrecio.value;
    const valCupon = inputCupon.value;

    var descuento = 0;
    switch (valCupon)
    {
        case cupones[0]:
            descuento = 15;
        break;
        case cupones[1]:
            descuento = 20;
        break;
        case cupones[2]:
            descuento = 80;
        break;
        default:
            alert("Cupón inválido");
            break;

    }

    const preciocdesc = calcularPrecioConDescuento(valPrecio,descuento);

    alert(preciocdesc);
    const resu = document.getElementById("ResultadoP")
    resu.innerText = "Precio con descuento $" + preciocdesc

}