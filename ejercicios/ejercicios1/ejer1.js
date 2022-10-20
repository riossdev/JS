// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// 1)
console.log("--1--")
function contarText(text){
  console.log(text.length) 
}
contarText("hola mundo")
console.log("--1--")

console.log("-----------Solucion del profe 1----------")
//Solucion del profe funcion declarada
function contarCadena(cadena = ""){
  if(cadena == ""){
    console.warn("No ingreso ningun texto")
  }else{
    console.log(`El texto ingresado "${cadena}" tiene ${cadena.length} caracteres`)
  }
}
contarCadena()
contarCadena("Hola mundo")

// funcion expresada
const contarCadena2 = (cadena) => 
  (!cadena) 
    ? console.warn("No ingreso ningun texto") 
    : console.log(`El texto ingresado "${cadena}" tiene ${cadena.length} caracteres`)

contarCadena2()
contarCadena2("Hola mundo")

console.log("-----------Solucion del profe 1----------")

console.log("--2--")
// 2)
function recortarText(text){
  const word = text.split(' ')
  console.log(word[0])
} 
recortarText("hola mundo")
console.log("--2--")

console.log("-----------Solucion del profe 2----------")

const recortarTexto2 = (cadena = '', longitud = undefined) =>
  (!cadena)
    ? console.warn("No ingreso ningun texto")
    : (longitud === undefined)
      ? console.warn("No ingresate la longitud para cortar tu cadena")
      : console.log(cadena.slice(0, longitud))

recortarTexto2("hola Mundo", 4)
recortarTexto2()
recortarTexto2("hola hola ")
recortarTexto2("", 5)

console.log("-----------Solucion del profe 2----------")

// 3)
console.log("--3--")
function textArray(text){
  const arr = text.split(' ')
  console.log(arr)
}
textArray("hola que tal como tais")
console.log("--3--")
console.log("--------Solucion del profe 3")

const separaText = (cadena = "", separador = undefined) =>
  (!cadena)
    ? console.warn("No ingreso ningun texto")
    : (separador === undefined)
      ? console.warn("No ingreso ningun metodo separador ")
      : console.log(cadena.split(separador))

separaText("hola que tal como estas el dia de hoy ", " ")
separaText("ene,feb,mar,abr,may,jun,jul,ago,sep,oct,nov,dic", ",")
separaText("","-")
separaText("hola que mas")

console.log("--------Solucion del profe 3------------")

// 4)  
console.log("--4--")

function repetirTexto(text){
  console.log(text.repeat(50))
} 
repetirTexto("hola ")

console.log("--4--")

console.log("--------Solucion del profe 4------------")

function repertirTexto(cadena = '', repetir = undefined ){
  if(!cadena) console.warn("No ingresaste ningun texto")
  if(repetir === undefined) console.warn("No ingresaste ningun numero de veces para repetir ")
  if(repetir === 0) console.warn("El numero de veces ingreado no puede ser cero")
  if(Math.sign(repetir) === -1) console.warn("El numero de veces a repetir no puede ser un numero negativo")
  for(let i = 1; i <= repetir ; i++){
    console.log(`${cadena} ${i}`)
  }
}


repertirTexto("",10)
repertirTexto("hola",)
repertirTexto("hola", 0)
repertirTexto("hola", -2)
repertirTexto("hola", 10)

console.log("--------Solucion del profe 4------------")