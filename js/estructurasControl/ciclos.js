// while
contador = 1
while( contador <= 10){
  console.log(contador)
  contador++
}

console.log("-----------------------------")

contador2 = 1
do {
  console.log(contador2)
  contador2++  
} while (contador2 <= 10);

for(let i = 1; i <= 10; i++){
  console.log("for " + i)
}

console.log("-----------------------------")
const arr = [10,20,30,40,50,60,70,80,90]

for(let i = 0; i < arr.length; i++){
  console.log(arr[i])
}

const obj ={
  nombre: "Juan",
  apellido: "Rios",
  edad: 38
}

for (const key in obj) {
  console.log(obj[key])
}
console.log("-----------------------------")

for (const iter of arr) {
  console.log(iter)
}