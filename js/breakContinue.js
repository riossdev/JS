const arr = [1,2,3,4,5,6,7,8,9,0]
// El break al encontrar el numero pareido sale del bucle
for(let i = 0; i < arr.length; i++){
  if(i === 5){
    break
  }
  console.log(arr[i])
}
// El continue se salta la comparacion de este numero
for(let i = 0; i < arr.length; i++){
  if(i === 5 ){
    continue
  }
  console.log(arr[i])
}

for(let i = 0; i <= 20; i++){
  let modulo = i % 2
  if(modulo !== 0){
    console.log(i)
  }
}

