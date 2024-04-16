// const fs=require("node:fs")
// console.log(`🚀 ~ fs:`, fs.readFileSync)
const { readFileSync, writeFileSync } = require("node:fs");
// console.log(`🚀 ~ readFileSync:`, readFileSync)

function read(params) {
  try {
    const data = readFileSync(`./${params}`, "utf-8");
    const dataParse = JSON.parse(data);
    dataParse.name = "viernes";
    console.log(`🚀 ~ read ~ dataParse:`, dataParse);
  } catch (error) {
    console.log(error);
  }
}

function write(params) {
  try {
    const data=writeFileSync("./data.txt", params)
    console.log(`🚀 ~ write ~ data:`, data)
  } catch (error) {
    console.log(error);
  }
}

// read("package.json");
write("[1,2,3]")
write("Hola")
