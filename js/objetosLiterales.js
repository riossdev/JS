// 
let nombre = "Maya luna"
let edad = 2

const gatos ={
  nombre: nombre,
  edad: edad,
  maullar:function (){
    console.log("Miauu Miauu!!")
  } 
}
gatos.maullar()
console.log(gatos.nombre)


const cat ={
  nombre,
  edad,
  maullar(){
    console.log("Miauu Miauuu Miauu!!")
  }
}
console.log(cat.edad)
cat.maullar()