// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numPrime = (num) => {
  if(!num) return console.warn("Debes de ingresar un numero")
  if(typeof(num) !== 'number') return console.warn("Debes de ingresar numeros no letras")
  if(num === 0) return console.error("El numero no puede ser 0")
  if(num === 1) return console.error("El numero no puede ser 1")
  if(Math.sign(num) === -1) return console.error("Debe de ser un numero positivo") 

  let prime = false
  for(let i = 2; i < num; i++){
    if((num % i) === 0){
      prime = true
      break
    }
  }
  return (prime)
    ? console.log(`El numero "${num}" No es numero primo`)
    : console.log(`El numero "${num}"  Es un numero primo`)
}
numPrime()
numPrime("")
numPrime(0)
numPrime(1)
numPrime(-1)
numPrime(true)
numPrime(83)  
console.log("-----------------")
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const numberParImpar = (num) => {
  if(!num) return console.warn("Debes de ingresar un numero")
  if(typeof(num) !== 'number') return console.warn("Debes de ingresar numeros no letras")
  if(num === 0) return console.error("El numero no puede ser 0")
  if(num === 1) return console.error("El numero no puede ser 1")
  if(Math.sign(num) === -1) return console.error("Debe de ser un numero positivo")
  
  const par = num % 2
  return (par === 0)
  ? console.log(`El numero ${num} Es un numero par`)
  : console.log(`El numero ${num} Es un numero impar`)
}
numberParImpar(2)
numberParImpar(3)
numberParImpar(13)
console.log("-----------------")
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const celciusFahrenhrit = (cel) => {
  if(!cel) return console.warn("Debes de ingresar el numero de grados que deseas convertir")
  if(typeof(cel) !== 'number') return console.warn("No puede ingresar texto")
  const fahret = (cel * 1.8) + 32
  console.log(`${cel} Grados celsius equivalen a ${fahret} grados fahrenheit`)
}
celciusFahrenhrit(1)


