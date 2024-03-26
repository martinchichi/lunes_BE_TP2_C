// // datos primitivos
// // String, number, boolean, null, undefined, symbol, bigint
// // datos complejos
// // objetos
// let obj = {
//   nombre: "Juan",
//   edad: 25,
//   saludar: function () {
//     console.log("hola");
//   },
// };
// let arr = [1, 2, "Hola", true];
// let newDay = new Date();
// let day = Date();
// let nl = null;
// // function
// function suma(x, y) {
//   return x + y;
// }
// ----------------------------------------------------------------------
// let nombre = "Camilo";
// let nombre2=nombre
// nombre2="Canela"
const data = {
  nombre: "camilo",
  edad: 10,
  camas: ["mi cama", "almohada"],
  date: new Date(),
  //   ladrar: function () {
  //     console.log("ladrando");
  //   },
};
// const data2=data
// data2.edad=11
// obj copy
// const objCopySpread= {...data}
// objCopySpread.edad=99
// objCopySpread.camas.push("su cama")
// -------------------
// const objCopyObjet = Object.assign({}, data);
// objCopyObjet.edad = 99;
// objCopyObjet.camas.push("su cama");
// ----------------------------------------------------------------------

// deep copy
// const dataCopyJson = JSON.parse(JSON.stringify(data));
// dataCopyJson.edad = 88;
// dataCopyJson.camas.push("cojin");
// structuredClone
// const dataCopyStructuredClone = structuredClone(data);
// dataCopyStructuredClone.camas.push("la suya");
// -----------------------------------------------------------------

// funciones
// saludar()
// function saludar( nombre, apellido) {
//    // console.log(`hola ${param} como estas?`)
//    // console.log('holaaaa '+ param, ' como estas?')
// }

// function saludar(...params) {
//       // console.log(`hola ${param} como estas?`)
//       // console.log('holaaaa '+ param, ' como estas?')
//    }
// console.log(saludar([1,2], 3, "osval"))

// arrow functions
// const saludar = (nombre, apellido) => {
//   return `Hola ${nombre} ${apellido}`;
// };
// const saludar = (nombre, apellido) => console.log(`Hola ${nombre} ${apellido}`);
// saludar("Juan", "Osuna")
// console.log(saludar("Juan", "Osuna"))

// saludar("camilo", "ojeda")
// const saludar = (nombre, apellido) => `Hola ${nombre} ${apellido}`;
// let userData = saludar("osval", "ojeda");
// console.log(saludar("Juan", "Osuna"));

function thisFunction() {}
// thisFunction();
//  thisArrow()
// --------------------------------------------
// metodos de array
// const arrayLength=[1,2,3]
// arrayLength.length=0
// const strArray=[1,3,4]

// --------------------
const arrayData = ["osval", "ojeda"];

const blockLetter = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  return str.toUpperCase();
};

// const mapData = arrayData.map(blockLetter);
const mapData = arrayData.map(function (str, index, array) {
   console.log(`🚀 ~ mapData ~ index:`, index)
   console.log(`🚀 ~ mapData ~ str:`, str)
   console.log(`🚀 ~ mapData ~ array:`, array)
   
  return str.toUpperCase();
});

console.log(`🚀 ~ arrayData:`, arrayData);
console.log(`🚀 ~ mapData:`, mapData);
