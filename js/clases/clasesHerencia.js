
class Animal {
  constructor(nombre, genero){
    this.nombre = nombre
    this.genero = genero
  }
  saludar(){
    console.log("Hi i am animal")
  }
}
class Cat extends Animal{
  constructor(nombre, genero, raza){
    // super manda a llamar al constructor de la clase Animal
    super(nombre,genero)
    this.raza = raza
  }  
  maullar(){
    console.log("Miua Miua!!!")
  }
}

const Dog = new Animal("Scooby", "Dog")
Dog.saludar()
console.log(Dog.nombre)
console.log(Dog.genero)

const Maya = new Cat ("Maya","Gatito","Tricolor")
const Luna = new Cat ("Luna","Gatito","Tricolor")
console.log(Maya)
Maya.maullar()
console.log(Luna)
Luna.maullar()