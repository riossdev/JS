// Objeto Console
console.log(console)
console.error("Esto es un Error")
console.warn("Esto es un warning")
console.info("Esto es un mensaje informativo")
console.clear()
console.info("Esto es un mensaje informatico")
console.log("Un resgistro ")
let nombre = "Juan",
apellido = "Rios",
edad = 38

console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido} y tengo ${edad} años`)
console.log(`Mi nombre es %s y mi apellido es %s y tengo %d años`, nombre, apellido, edad)
// console.clear() 

// Para saber cuando se demora en compilar mi codigo
console.time(`Cuanto tarda mi codigo`)
const arreglo = Array(1000000)
for(let i = 0; i < arreglo.length; i++){
  arreglo[i]=i
}
console.timeEnd(`Cuanto tarda mi codigo`)
// console.log(arreglo)

// Para saber cuantas veces se ejecuta mi codigo en for
for(let i = 0; i < 50; i++){
  console.count("Codigo for")
  console.log(i)
}
console.clear()
let x = 3,
  y = 2,
  pruebaxy = "Se espera que x siempre sea menor que y"

console.assert(x < y, {x,y,pruebaxy})