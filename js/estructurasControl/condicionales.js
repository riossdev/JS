// condicionales  

let edad = 19

if(edad >= 18){
  console.log("Eres mayor de edad")
}else{
  console.log("Eres menor de edad")
}

// Operador Ternario
años = 12
const eresMayor = (años >= 19) 
  ? "Eres mayor de edad" 
  : "Eres menor de edad"
console.log(eresMayor)

// Swiych case
dia = 6

switch (dia){
  case 1: 
    console.log("Domingo")
    break;
  case 2: 
    console.log("Lunes")
    break;
  case 3: 
    console.log("Martes")
    break;
  case 4: 
    console.log("Miercoles")
    break;
  case 5: 
    console.log("Jueves")
    break;
  case 6: 
    console.log("Viernes")
    break;
  case 7: 
    console.log("Sábado")
    break;
  default:
    console.log("No pertenece a ningun dia de la semana")
    break;
}