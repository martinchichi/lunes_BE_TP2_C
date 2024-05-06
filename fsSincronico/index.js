// const fs= require("node:fs")
import fs from "node:fs"

const read=()=>{
     try {
          const data=fs.readFileSync("./package.json", "utf-8")
          console.log(`🚀 ~ read ~ data:`, data)
     } catch (error) {
          console.log(`🚀 ~ read ~ error:`, error)
     }
}

const write=()=>{
     try {
          const data=fs.writeFileSync("./data.txt", "max info")
          console.log(`🚀 ~ write ~ data:`, data)
     } catch (error) {
          console.log(`🚀 ~ write ~ error:`, error)
     }
}
// read()
write()