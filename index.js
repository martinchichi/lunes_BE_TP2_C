// require
// console.log(`🚀 ~ require:`, require)

const {saludar,  nombreUsuarios} = require("./funciones/saludar");
// console.log(`🚀 ~ nombreUsuarios:`, nombreUsuarios)
// console.log(`🚀 ~ usersName:`, usersName)
// console.log(`🚀 ~ saludar:`, saludar);
// console.log(`🚀 ~ usersName:`, usersName)
saludar()

// destructuring
const data = {
  userName: "Juan",
  userLastName: "Gonzalez",
  edad: 30,
};
// const userName=data.userName;
// const edad=data.edad;

// const { edad, userName, age } = data;
// console.log(`🚀 ~ age:`, age);
// console.log(`🚀 ~ edad:`, edad);
// console.log(`🚀 ~ userName:`, userName);
// --------------------------------------------

const numeroMaximo= require("./ejercicios/numeroMaximo")
const sumaArray= require("./ejercicios/sumaArray")
const abbrevName= require("./ejercicios/abbrevName")

numeroMaximo([10, 5, 20, 15])
sumaArray([53,3,4,5, "s"])
abbrevName("kuka canela camilo")
abbrevName("Sam Harris")
