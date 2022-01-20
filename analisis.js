const arrSalarios = colombia.map(
    function (persona)
    {
        return persona.salary;
    }
);
const arrSalariosSort = arrSalarios.sort(
    function (salarioA,salarioB)
    {
        return salarioA - salarioB;
    }
);

function esPar(numero)
{
    return (numero % 2 === 0);
}
function calcularMedianaSalarios(lista)
{
    const mitad = parseInt(lista.lenght / 2);

    var mediana = 0;
    if (esPar(lista.lenght))
    {
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
    }
    return mediana;
}
function calcularMedia(lista)
{
    //El metodo reduce, itera por cada elemento
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado +  nuevoElemento;
        }
    );

    var promedio = sumaLista / lista.length;

    return promedio;

}
//Mediana del top 10%
const spliceStart = parseInt((arrSalariosSort.length * 90) / 100);
const spliceCount = arrSalariosSort.length - spliceStart;

console.log({spliceStart, spliceCount,arrSalariosSort});

const arrSalariosTop = arrSalariosSort.splice(spliceStart,spliceCount);

const medianaTop10 = calcularMedianaSalarios(arrSalariosTop);
const medianaGeneral = calcularMedianaSalarios(arrSalariosSort);



console.log({medianaGeneral,medianaTop10});