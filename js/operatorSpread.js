// 

const sumar = function(a,b,...c){
  let resultado = a + b
  c.forEach(function(n){
    resultado += n
  })
  return resultado
}
console.log(sumar(1,2))
console.log(sumar(1,2,3))
console.log(sumar(1,2,3,4))

const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,0]

const arr3 = [arr1, arr2]
const arr4 = [...arr1,...arr2]
console.log(arr3)
console.log(arr4)