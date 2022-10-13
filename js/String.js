// Un String es una cadena de texto 
// Diferencia entre un Propiedad y metodo
// una propiedad son las caracteristicas de los objetos 
// un metodo son las acciones que se realizan con los objetos 

let nombre = "Juan Esteban"
let apellido = "Rios Pulgarin"
// variable saludo con el constructor 
let saludo = new String("Hola")
console.log(nombre,apellido,saludo)
// variable con el metodo length
console.log(nombre.length, apellido.length, saludo.length)
// metodo para pasar a mayus toda la cadena 
console.log(nombre.toUpperCase())
// metodo para encontrar coincdencias dentro de los strings
let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
console.log(text.includes("has"))
console.log(text.includes("tino"))