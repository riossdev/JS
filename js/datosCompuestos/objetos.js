// Dentro de un objeto las variables se llaman atributos/propiedades y a las funciones se les llama metodos
const usuario = {
  nombre: "Juan",
  apellido: "Rios",
  edad: 38,
  pasatiempos:["codear","leer","estudiar"],
  contacto: {
    email: "jriodev@gmail.com",
    twitter: "@riossdev",
    movile: "123123123"
  },
  saludar: function(){
    console.log(`Hola :)`)
  },
  miNombre: function(){
    console.log(`Hola mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`)
  }
}

console.log(usuario.nombre)
console.log(usuario.apellido)
console.log(usuario.edad)
console.log(usuario.pasatiempos[0])
console.log(usuario.pasatiempos[1])
console.log(usuario.pasatiempos[2])
console.log(usuario.contacto.email)
console.log(usuario.contacto.twitter)
console.log(usuario.contacto.movile)
usuario.saludar()
usuario.miNombre() 
console.log("-----------------------------")
// metodo de keys, me devulve todas los nombres de atributos
console.log(Object.keys(usuario))
// metodo de values de devuelve todas los valores de los atributos
console.log(Object.values(usuario))

