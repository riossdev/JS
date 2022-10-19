console.log(Date())
// Para poder tomar la fecha por separado debemo utilizar el prototipo new
let fecha = new Date()
console.log(fecha)
// Obtener el dia 
console.log(fecha.getDate())
// Obtener ek dia 
// date organiza la fecha como un arreglo [D,L,M,MI,J,V,S] ->indice [0,1,2,3,4,5,6,7]
console.log(fecha.getDay())
// obtener el mes 
// Al igual que los dias de la semana,  date los coloca como un arreglo por eso nos muestra solo su indice
console.log(fecha.getMonth())
// Obtener el año
console.log(fecha.getFullYear())
// Obtener la hora
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())

// Obterner diferentes formatos con la fecha

// fecha 
console.log(fecha.toDateString())
// fecha con formato dia/mes/año
console.log(fecha.toLocaleDateString())
// Con formato y con hora
console.log(fecha.toLocaleString())
// solo la hora
console.log(fecha.toLocaleTimeString())

// libreria para la hora en js se llama moment.js
console.log(Date.now())
let cumpleJuan = new Date(1984, 9, 9)
console.log(cumpleJuan)