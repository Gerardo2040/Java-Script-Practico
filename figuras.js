//Codigo del cuadrado
console.group("Cuadrado")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");

function perimetroCuadrado(lado)
{
    return lado * 4;
}

// console.log("El Perimetro del cuadrado es " + perimetroCuadrado + "cm");

function areaCuadrado(lado) 
{
    return lado * lado;
}

// console.log("El área del Cuadrado es " + areaCuadrado + "cm2");
console.groupEnd

//Codigo del Triangulo
console.group("Triangulo")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 4.5;

// console.log("Los lados del triangulo miden " + ladoTriangulo1 + " cm," + ladoTriangulo2 + " cm, " + baseTriangulo + " cm" );

function perimetroTriangulo(lado1, lado2, base) 
{
    return lado1 + lado2 + base;
}
// console.log("El perimetro triangulo es: " +  perimetroTriangulo);

function areaTriangulo(base, altura)
{
    return (base * altura) / 2;
}
// console.log("El area del triangulo es: " +  areaTriangulo + " cm2");

console.groupEnd

//Codigo del circulo
console.group("Circulo");

// const radioCirculo = 4;
function diametroCirculo(radio)
{
    return radio * 2;
}

const pi = Math.PI;

function perimetroCirculo(radio)
{ 
    const diametro = diametroCirculo(radio);
    return diametro *pi;
}

function areaCirculo(radio) 
{
    return (radio * radio) * pi;
}

// console.log("El perimetro del circulo es " + perimetroCirculo);
// console.log("El area del circulo es " + areaCirculo);
// console.log("El PI es " + pi);

console.groupEnd;

//Interactuar con HTML
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const valorI = input.value;
    const perimetro = perimetroCuadrado(valorI);
    alert("El Perimetro es:" + perimetro )
}
function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const valorI = input.value;
    const area = areaCuadrado(valorI);
    alert("El area es:" + area );
}
function calcularAreaTriangulo()
{
    const inputLado = document.getElementById("lado");        
    const inputBase = document.getElementById("base");
    const valorLado = inputLado.value;
    const valorBase = inputBase.value;

    const altura = Math.sqrt((valorLado * valorLado) - ((valorBase * valorBase) / 4));

    const area = areaTriangulo(valorBase,altura);
    alert("El árae del triangulo es:" + area + " con Altura:" + altura);

}
function calculaAlturaTriangulo()
{
    const inputLado = document.getElementById("lado");        
    const inputBase = document.getElementById("base");
    const valorLado = inputLado.value;
    const valorBase = inputBase.value;

    const altura = Math.sqrt((valorLado * valorLado) - ((valorBase * valorBase) / 4));
    alert("La Altura es " + altura);
}