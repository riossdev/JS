// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarVocalesConsonantes = (cadena = '') =>{
  if(cadena === '') return console.warn('El valor ingresado esta vacio')
  if(typeof(cadena) !== 'string') return console.error('El valor ingresado no corresponde a un texto')
  let vocales = 0, consonantes = 0;
  cadena = cadena.toLocaleLowerCase()
  for(let letra of cadena){
    if(/[aeiouáéíóúü]/.test(letra)){
      vocales++
    }
    if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)){
      consonantes++
    }
  }
  return console.info({ 
    cadena,
    vocales,
    consonantes
  })
}
contarVocalesConsonantes()
contarVocalesConsonantes(2)
contarVocalesConsonantes("hola Mundo")

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = '') =>{
  if(nombre === '') return console.warn('El valor ingresado es vacio')
  if(typeof(nombre) !== 'string') return console.error('El valor ingresado no puede contener numeros')

  let expReg= /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/.test(nombre);
    
  if(expReg){
    return console.log('El nombre ingresado es valido')
  }else{
    return console.log('El nombre ingresado no es valido')
  } 
  
}
validarNombre()
validarNombre(2)
validarNombre('JUAN esteban')
validarNombre('juan&')
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validadCorreo = (correo = '') =>{
  if(correo === '') return console.warn('No has ingresado ningun correo')
  
  let expCorreo = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo)

  if(expCorreo){
    return console.log('El correo ingresado es valido')
  }else{
    return console.error('El correo ingresado no es valido')

  }

}
validadCorreo('juan@as.com')
validadCorreo('juan')