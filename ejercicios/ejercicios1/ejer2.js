// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


console.log("---1---")

const invertirTexto = (text = '') =>
  (!text)
    ? console.warn("No ingresaste un cadena de texto")
    : console.log(text.split('').reverse().join(''))

invertirTexto()
invertirTexto("Hola Mundo")
invertirTexto("javascript es un lenguaje de programacion increible")

console.log("---1--- ")

console.log("---2--- ")

const contarText = (text = '', textIncluido = undefined) =>
  (!text)
    ? console.warn("No ingresaste ningun texto")
    : (textIncluido === undefined)
      ? console.warn("No ingresaste ninguna palabra para buscar")
      : console.log(text.split(' ').reduce((a,b) => (a[b] ? a[b] +=1 : a[b] = 1 ,a), {}))

contarText("hola mundo adios mundo mundo cruel", "mundo")
console.log("---2--- ")

console.log("-----Solucion del profe 2 ------")


const textEnCadena = (cadena = '', text  = '') =>{
  
  if(!cadena) return console.warn("No ingresaste ningun texto")
  if(!text) return console.warn("No ingresaste el texto a contar")
  
  let i = 0
  contador = 0
  
  while(i !== -1){
    i = cadena.indexOf(text, i)
    if(i !== -1){
      i++
      contador++
    }
  }
  return console.log(`La palabra ${text} esta incluida ${contador} veces`)
  
}
textEnCadena("mundo mundo mundo mundo mundo", "mundo")
console.log("-----Solucion del profe 2 ------")



const palindromo = (text = "") =>{
  if(!text)  return console.warn("No ingresaste ningun texto")
  const text1 = text.split('').reverse().join('')
  const text2 = text1.split('').reverse().join('')
  // if(text1 === text2){
  //   return console.log("Es un pálindromo")
  // }else{
  //   return console.log("No es un palindromo")
  // }
  console.log(text1)
  console.log(text2)
}
palindromo("yo soy")