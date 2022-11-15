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

const convertir = (NumGrados = '', grados = '') =>{
  if(typeof(NumGrados) === 'string') return console.warn("Debes ingresar los grados a cambiar en numeros no es letras")
  if(typeof(grados) !== 'string') return console.warn("Debes ingresar el tipo de grado al que queires cambiar")
  if(grados.length !== 1 || !/(C|F)/.test(grados)) return console.error("Solo puedes ingresar los valores C celcius F fahrenheit")
  if(grados === "C") return console.log(`El valor en grados Celcius es: ${NumGrados * (9/5) + 32}°C`)
  if(grados === "F") return console.log(`El valor en grados Fahrenheit es: ${(NumGrados - 32) * (5/9)}°F`)
}
convertir(2, "C")
convertir(32, "F")

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
console.log("----------------------------------")
const convertirBinarioDecimal = (numero = undefined, base = undefined) =>{
  if(numero === undefined) return console.warn("No ingresaste numero a convertir")
  if(typeof(numero) !== 'number') return console.error(`El valor ${numero} no es un numero`)
  if(base === undefined) return console.warn("No ingresarte una base")
  if(typeof(base) !== 'number') return console.error(`La base ${base} no es un numero`)

  if(base === 2){
    return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
  }else{
    return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`)
  }
}
convertirBinarioDecimal()
convertirBinarioDecimal(2,)
convertirBinarioDecimal(2,"s")
convertirBinarioDecimal(100,2)
convertirBinarioDecimal(1110010,2)

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 .
console.log("-----------------")
const descuento = (valor = undefined, descuento = undefined) =>{
  if(!valor) return console.warn("No ingresaste ningun valor")
  if(!descuento) return console.warn("No ingresaste ningun valor a descontar")
  if(typeof(valor) === 'string') return console.error("Debes ingresar el valor en numero no en letras")
  const porcentaje = valor - ((valor/100) * descuento )               
  console.log(`El valor a cancelar despues del descuento es ${porcentaje}`)
}
descuento(1000, 20)
descuento(1000, 25)
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
console.log("----------------")
// const fecha = (d='',m='',a='') =>{
//   if(!d || !m || !a) return console.log("Debes ingresar una fecha correcta")
//   const resta = 2022 - a 
//   console.log(`la fecha ${d}/${m}/${a} han pasado ${resta} Años`)
// }

// fecha(11,22,2)
// fecha(12,23,2000)
// fecha(10,09,1984)

const calcularAnios = (fecha = undefined) => {
  if(fecha === undefined) return console.warn('Debes de ingresar una fecha')
  if(!(fecha instanceof Date)) return console.error('El dato introducido no es una fecha valida')

  const hoy = new Date().getTime() - fecha.getTime()
  const anios = 1000 * 60 * 60 * 24 * 365
  const fechaActual = Math.floor( hoy / anios )
  console.log(`los años transcurridos ${fechaActual} años`)
}

calcularAnios()
// calcularAnios(hola,09,20200)
calcularAnios(new Date(1984,04,23))

