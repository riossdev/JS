// Funcion anonima autoejecutable

(function(){
  console.log("Hola desde la funcion Anonima")
})();

(function(d,w,c){
  console.log("Hola desde la funcion Aninima 2")
  console.log(d)
  console.log(c)
  c.log("Esto es desde la funcion")
})(document,window,console);

(function(){
  console.log("Versión clasica")
})();

((function(){
  console.log("Versión Dugglas Crockford")
})());

+function(){
  console.log("Versión unaria")
}();

!function(){
  console.log("Versión facebook")
}();

