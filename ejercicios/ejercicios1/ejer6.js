// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const numerosCuadrado = (numero = []) =>{
  
  if(numero === '') return console.warn('No ingresaste ningun valor')
  if(typeof(numero) !== 'arreglo') return console.error('El valor ingresado no es un numero')
  let i = 0
  let Arr = []
  while(i < numero.length){
    const cuadrado = numero[i] * numero[i]
    Arr.push(cuadrado)
    i++
  }
  console.log(Arr) 
}
numerosCuadrado([1,4,5])
numerosCuadrado([2,8,3])

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const numAltoBajo = () =>{


}
console.log("hola")


// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

