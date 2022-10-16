// POO
// Clases - Modelo a segir
// Objetos - Es una estancia de una clase
// Atributos - Es una caracteristica de un objeto
// Metodos - Son las acciones que un objeto puede hacer

// function Animal (nombre, genero){
//   this.nombre = nombre
//   this.genero = genero

//   this.saludar = function(){
//     console.log("Hola soy un animal")
//   }
// }

// De esta forma evitamos cargar los metodos a todos los prototipos
function Animal (nombre, genero){
  this.nombre = nombre
  this.genero = genero
}
Animal.prototype.saludar = function(){
  console.log("Hola soy un animal")
}
const busg = new Animal("Busg bunny", "Rabit") 
const lola = new Animal("Lola bunny", "Rabit") 
console.log(busg)
console.log(lola)