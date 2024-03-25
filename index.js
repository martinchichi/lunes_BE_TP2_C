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
// console.log(`🚀 ~ obj:`, obj);
// console.log(`🚀 ~ obj:`, typeof obj);

// let arr = [1, 2, "Hola", true];
// console.log(`🚀 ~ arr:`, arr);
// console.log(`🚀 ~ arr:`, typeof arr);

// let newDay = new Date();
// console.log(`🚀 ~ day:`, newDay);
// console.log(`🚀 ~ day:`, typeof newDay);

// let day = Date();
// console.log(`🚀 ~ day:`, day);
// console.log(`🚀 ~ day:`, typeof day);

// let nl = null;
// console.log(`🚀 ~ nl:`, nl);
// console.log(`🚀 ~ nl:`, typeof nl);

// // function
// function suma(x, y) {
//   return x + y;
// }
// console.log(`🚀 ~ suma ~ suma:`, suma);
// console.log(`🚀 ~ suma ~ suma:`, typeof suma);

// ----------------------------------------------------------------------
// let nombre = "Camilo";
// let nombre2=nombre
// console.log(`🚀 ~ nombre:`, nombre)
// console.log(`🚀 ~ nombre2:`, nombre2)
// nombre2="Canela"
// console.log(`🚀 ~ nombre:`, nombre)
// console.log(`🚀 ~ nombre2:`, nombre2)

const data = {
  nombre: "camilo",
  edad: 10,
  camas: ["mi cama", "almohada"],
  ladrar: function () {
    console.log("ladrando");
  },
};
// const data2=data
// console.log(`🚀 ~ data:`, data)
// console.log(`🚀 ~ data2:`, data2)
// data2.edad=11
// console.log(`🚀 ~ data:`, data)
// console.log(`🚀 ~ data2:`, data2)

// obj copy
// console.log(`🚀 ~ data:`, data)
// const objCopySpread= {...data}
// console.log(`🚀 ~ objCopySpread:`, objCopySpread)
// objCopySpread.edad=99
// objCopySpread.camas.push("su cama")
// console.log(`🚀 ~ data:`, data)
// console.log(`🚀 ~ objCopySpread:`, objCopySpread)
// -------------------
// console.log(`🚀 ~ data:`, data);
// const objCopyObjet = Object.assign({}, data);
// console.log(`🚀 ~ objCopyObjet:`, objCopyObjet);
// objCopyObjet.edad = 99;
// objCopyObjet.camas.push("su cama");
// console.log(`🚀 ~ data:`, data)
// console.log(`🚀 ~ objCopyObjet:`, objCopyObjet);
// ----------------------------------------------------------------------

// deep copy

const dataCopyJson = JSON.parse(JSON.stringify(data));
console.log(`🚀 ~ data:`, data);
console.log(`🚀 ~ dataCopyJson:`, dataCopyJson);
dataCopyJson.edad = 88;
dataCopyJson.camas.push("cojin");
console.log(`🚀 ~ data:`, data);
console.log(`🚀 ~ dataCopyJson:`, dataCopyJson);
