// Funciones son fragmentos de codigo que se puede escribir una ves y se puede ejecutar muchas veces
// funcion declarada
function estoEsUnaFuncion(){
  console.log("uno")
  console.log("dos")
  console.log("tres")
}
estoEsUnaFuncion ()

console.log("----------------------------- ")
function funcionQueDevuelveValor(){
  console.log("uno")
  console.log("dos")
  console.log("tres")
  return "Este es el valor que retorna la funcion"
}

funcionQueDevuelveValor()
let retornoDeUnaFuncion = funcionQueDevuelveValor()
console.log(retornoDeUnaFuncion)

console.log("-------------------------------")

function saludar (nombre = "Desconocido", apellido = "Desconocido"){
  console.log(`Hola mi nombre es ${nombre} y mi apellido es ${apellido}`)
}
saludar("Juan","Rios")
saludar()

console.log("-------------------------------")
// funcion declarada dichas funciones no tienen hoisting se pueden llamar en cualquier parte del codigo

expresada()
function expresada(){
  console.log("Esta se ejecutara en cualquier parte del codigo")
}
expresada()

// Funcion anónima
const funcionExpresada = function(){
  console.log("Esta funcion solo se puede ejecutar despues de su definicion, si se ejecuta antes esto nos arroja un error")
}
funcionExpresada()