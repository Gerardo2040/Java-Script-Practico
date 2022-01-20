// const lista1 = [
//     100,
//     200,
//     300,
//     400,
//     500
// ];
function calcularModa(lista)
{
    //Aquí creamos un objeto vacio
    const lista1Cont = {};

    //Usamos la función map para recorrer el arreglo
    lista.map(
        function (elemento)
        {
            //Por cada elemento valida si existe en la lista de objetos
            // el objeto quedaría de la siguiente manera { elemento: cantidad}
            //si existe, lo incrementa
            if (lista1Cont[elemento])
            {
                lista1Cont[elemento] += 1;
            }
            //si no existe, lo crea con 1
            else
            {
                lista1Cont[elemento] = 1;
            }
        } 
    )
    //Ordenación de objeto lista1Cont
    const listaOrdenada = Object.entries(lista1Cont).sort(
        function (elementoA, elementoB)
        {
            //Se toma el [1] porque el que queremos ordenar es el dato de cantidad
            // no el nombre del elemento { elemento: cantidad}
            return elementoA[1] - elementoB[1];
        }
    )
    const moda = listaOrdenada[listaOrdenada.length -1];

    console.log(moda);

    //const lista1Array = Object.entries(lista1Cont).sort();
}

function calcularMedia(lista)
{
    //var suma = 0;
    // for(let i = 0; i < lista.length; i ++)
    // {
    //     suma = suma + lista[i];
    // }
    // lista.forEach(element => {
    //     suma = suma + element;
    // });
    //El metodo reduce, itera por cada elemento
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado +  nuevoElemento;
        }
    );

    var promedio = sumaLista / lista.length;

    return promedio;

}
function calcularMediana(lista)
{
    lista = lista.sort();
    const residuo = lista.length % 2;
    var mediana = 0;
    if (residuo === 0)
    {
        //es par
        console.log("es par")
        let medio = parseInt(lista.length / 2) ;
        const dato1 = lista[medio - 1];
        const dato2 = lista[medio];

        const promDatos = (dato1 + dato2) / 2;

        mediana = promDatos;
    }
    else
    {
        // es inpar
        console.log("es inpar")
        let medio = parseInt(lista.length / 2) ;

        
        mediana = lista[medio];
        console.log("Medio: " + medio + "Mediana " + mediana);
    }

    return mediana;
}