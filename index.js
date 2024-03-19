/*variables*/
// variables
// var
console.log(`🚀 ~ nombre:`, nombre)
var nombre="kuka"
nombre="canela"
var nombre="camilo"
console.log(`🚀 ~ nombre:`, nombre)

// let
let apellido
console.log(`🚀 ~ apellido:`, apellido)
apellido="ojeda"
console.log(`🚀 ~ apellido:`, apellido)
// let apellido="lopez"

// const
// const  saludar="hola" //no se puede reasignar el valor de una variable const, 
// console.log(`🚀 ~ saludar:`, saludar)

const saludar=(nombre)=>{ 
   return `Hola ${nombre}`
}

console.log(saludar("kuka"))
console.log(saludar("camilo"))
console.log(saludar("11"))
console.log(saludar(11))
console.log(saludar())







