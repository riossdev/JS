// video 25 
// Metodo estatico se puede ejecutar sin necesidad de instanciar la clase

class Animal {
  constructor(nombre,genero){
    this.nombre = nombre
    this.genero = genero
    this.raza = null
  }
  // metodo estatico
  static queSoy(){
    console.log("Soy un Perrito")
  }
  get getRaza(){
    return this.raza
  }
  set setRaza(raza){
    this.raza = raza
  }
}

const Scooby = new Animal("Scooby","Perro")

Animal.queSoy()
Scooby.setRaza = "Grán Danés"
console.log(Scooby.getRaza)