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
  return console.log(`La palabra "${text}" esta incluida ${contador} veces`)
  
}
textEnCadena("mundo mundo mundo mundo mundo", "mundo")
console.log("-----Solucion del profe 2 ------")

console.log("--------3----------")
const palindromo = (text = "") =>{
  const str = text
  if(!text)  return console.warn("No ingresaste ningun texto")
  text = text.replace(/\s/g, '').toLocaleLowerCase()
  const separar = text.split('')
  const reverse = separar.reverse()
  const juntar = reverse.join('')
  const palindrom = (text === juntar) 
    ? console.log( `La palabra "${str}" Es un polindromo` )
    : console.log(` La palabra "${str}" No es un polindromo`)
}
palindromo()
palindromo("wppwko ki")
palindromo("Ateo poco poeta") 
console.log("--------3----------")

console.log("--------4----------")

const eliminarCaracteres = (text = '', caracter = '') =>{
  if(!text) return console.warn("No ingresaste ningun texto")
  if(!caracter) return console.warn("No ingresaste ningun carater a eliminar")

  const textSep = text.split('')
  const caracterSep = caracter.split('')
  
  let arr = []
  for(let i = 0; i < textSep.length; i++){
    let igual =  false
    for(let j = 0; j < caracterSep.length; j++){
      if(textSep[i] === caracterSep[j]){
        igual = true
      }
    }
    if(!igual)arr.push(textSep[i]) 
  }
  
  return console.log(arr.join(''))
}

eliminarCaracteres()
eliminarCaracteres("xyz1 xyz2 xyz3 xyz4 xyz5", "xyz")




console.log("--------4----------")
console.log("--------Solucion del profe 4----------")

const eliminarPatron = (text = '', patron = '') => {

  (!text)
    ? console.log("No ingresaste el texto")
    : (!patron)
      ? console.log("No ingresaste el patron")
      : console.log(text.replace(new RegExp(patron, "ig"), ""))

}

eliminarPatron("xyz1 xyz2 xyz3 xyz4 xyz5", "xyz")
console.log("--------Solucion del profe 4----------")
