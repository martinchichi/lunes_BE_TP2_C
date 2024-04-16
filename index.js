function uno(param) {
  return param;
}

setTimeout(() => {
  console.log("set time out 1");
}, 3000);

setTimeout(() => {
  console.log("set time out 2");
}, 2000);

function dos(param) {
  return new Promise((resolve, reject) => {
    if (param === 2) {
      resolve("promesa ok es dos");
    } else {
      reject("Pomesa rechazada");
    }
  });
}
function tres() {
  return fetch("http://swapi.dev/api/planets/1/");
}
async function cuatro() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (data.status === 404) throw "Error 404";
    const dataJson = await data.json();
    // console.log(`🚀 ~ cuatro ~ data:`, dataJson);
    return dataJson;
  } catch (error) {
    console.log(`🚀 ~ cuatro ~ error:`, error);
  } finally {
    console.log("final del try catch");
  }
}
function cinco(param) {
  return param;
}

console.log(`🚀 ~ uno:`, uno("uno"));
// console.log(`🚀 ~ dos:`, dos(2));

dos(2)
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e))
  .finally(() => console.log(`final de la promesa`));

// console.log(`🚀 ~ tres:`, tres("tres"));
tres()
  // .then((data) => data.json())
  // .then((res) => console.log(tres, res))
  // .catch((e) => console.log(e));
// console.log(`🚀 ~ cuatro:`, cuatro("cuatro"));
cuatro().then(data=>console.log(data))
console.log(`🚀 ~ cinco:`, cinco("cinco"));
