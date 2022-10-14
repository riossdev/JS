// try {
//   console.log("En el try se agrega el código a evaluar")
// } catch (error) {
//   console.log("Catch captura cualquier error surgido o lanzado en el try") 
// }finally{
//   console.log("El bloque finally ejecuatara siempre al final de un bloque try-catch")
// }

try {
  let numero = 5
  if(isNaN( numero )){
    throw new Error("El caracter intruducido no es un número")
  }
  console.log(numero * numero)
} catch (error) {
  console.log(`Se produjo un error: ${error}`)
}