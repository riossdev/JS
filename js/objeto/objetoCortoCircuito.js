// Corto circvito OR cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se cargara por defecto
// Corto circuito AND cuando el valor de la izquierda de la expresion pueda validar a false, es el valor que cargara por defecto

function saludar(nombre){
  // nombre = nombre || "Desconocido"
  console.log(`Hola ${nombre}`)
}
console.clear()
saludar()
saludar("Juan Rios")

console.log("verdadero" || "valor de la derecha")
console.log("1" || "valor de la derecha")
console.log("true" || "valor de la derecha")
console.log({} || "valor de la derecha")
console.log(false || "valor de la derecha")
console.log(null || "valor de la derecha")
console.log(-0 || "valor de la derecha")


console.log(false && "valor de la izquierda")
console.log(null && "valor de la izquierda")
console.log(-0 && "valor de la izquierda")
console.log("12" && "valor de la izquierda")