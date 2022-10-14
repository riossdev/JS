// Es la forma de asignar valoresde un objeto o un arreglo a variables independientes
// debemos tener encuanta que los nombre de la variables tienes que ser iguales para que no tengamos problemas con la asignacion 

const numero = [1,2,3]
let [uno, dos, tres] = numero 
console.log(tres,dos,uno)

const obj ={
  nombre: "Juan",
  apellido: "Rios",
  edad: 38
}

let{nombre, apellido,edad} = obj
console.log(apellido, edad, nombre )