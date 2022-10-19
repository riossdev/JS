// Expreciones regulares: Son una secuencia de caracteres que forma un patrón de búsqueda, pricipalmente utilizada para la búsqueda de patrones de cadenas de caracteres

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum sit amet libero sed fermentum. Pellentesque vel pulvinar erat. Ut varius tempus sem id rutrum. Fusce ultricies lorem ac auctor tincidunt. Aenean lobortis porttitor risus vel finibus. Sed a libero at enim condimentum porttitor. Curabitur accumsan, eros at consectetur efficitur, sem odio dignissim sem, interdum elementum dolor enim est id felis. Nunc tempus dictum ligula, in hendrerit sapien maximus ac. Vivamus dictum mauris pharetra lectus bibendum congue id at nunc."

// let expReg = RegExp("dolor","ig")
// console.log(expReg.test(text))
// console.log(expReg.exec(text)) 

let expReg2 = /[0-9]/ig; 
console.log(expReg2.test(text))
console.log(expReg2.exec(text))