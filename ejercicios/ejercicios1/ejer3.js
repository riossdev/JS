// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// console.log(Math.round(Math.random(501, 600) * 100))

console.log("------------- ejer 1----------")
const numberAletori = () =>{
  const min = Math.floor(501)
  const max = Math.ceil(600) 
  return console.log(Math.round(Math.abs((Math.random() * (min - max) - min))))
}

numberAletori()
console.log("------------- ejer 1----------")

console.log("------------- ejer 2----------")

const numberCapicua = (num) => {
  if(!num) return console.warn("No ingresaste ningun numero")
  // if(typeof(num) !== '') return console.warn("Ingresaste una palabra y debe ser un numero")
  const numero = num.toString().split('')
  const rerver = numero.reverse().join('')
  const resuelt = (num == rerver) 
    ? console.log(`El numero ${num} es capicua`)
    : console.log(`El numero ${num} no es capicua`)
  // console.log(numero)
  // console.log(rerver)
}

numberCapicua()
numberCapicua("hola")
numberCapicua(123)
numberCapicua(11)
numberCapicua(2022)


console.log("------------- ejer 2----------")
console.log("------------- ejer 3----------")

const factorial = (num) => {

  var total = 1
  for(let i = 1; i <= num; i++){
    total = total * i
  }
  return console.log(total)
}

factorial(10)

console.log("------------- ejer 3----------")