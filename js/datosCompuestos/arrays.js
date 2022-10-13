// Un arreglo es una coleccion de elementos 
// los arreglos tienen un indice empezando desde el cero, para poder adceder a ellos debemos llamar a este indece

const A = [1,3,["a","b",[1,2,3]]]
console.log(A[1])
console.log(A[0])
console.log(A[2])
console.log(A[2][2])
console.log(A[2][2][1])

// una forma de generar arreglos

const B = Array.of("x","y","z",1,2,3)
console.log(B)
// El metodo fill nos ayuda a rellenar por defecto los arrglos con valores iniciales 
const C = Array(50).fill(true)
console.log(C)
// con el metodo push podemos ingresar un valor a nustro arreglo, este se posiciona en el ultimo lugar
const colores = ["rojo","verde","amarillo"]
colores.push("negro")
console.log(colores)
// el metodo pop quita el ultimo elemento de nuestro arreglo
colores.pop()
console.log(colores)

// con el metodo forEach podemos recorer un arreglo 
colores.forEach(function(d, i){
  console.log(`<li id="${i}"> =${d}`)
})
