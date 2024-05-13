import express from "express";
const app = express();
import url from "url";
import path from "path";

// console.log(`🚀 ~ path:`, path)
// console.log(`🚀 ~ url:`, url)

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`🚀 ~ meta.url:`, import.meta.url);
console.log(`🚀 ~ __filename:`, __filename);
console.log(`🚀 ~ __dirname:`, __dirname);

// app.get("/", (req, res) => {
//   // console.log(`🚀 ~ app.get ~ req:`, req)
//   res.send("hola get desde express");
// });
app.post("/", (req, res) => {
  res.send("hola post desde express");
});
app.delete("/delete", (req, res) => {
  res.send("hola delete desde express");
});

// ---------------------------
let count = 0;
app.get("/fecha", (req, res) => {
  const fecha = Date();
  res.send(fecha);
});
app.get("/count", (req, res) => {
  count++;
  res.send({ count });
});
// app.use("/html",express.static('files'));
app.get("/:dir/:file", (req, res) => {
  // console.log(`🚀 ~ app.get ~ req:`, req.params)
  // const dir= req.params.dir
  // const file= req.params.file
  const { dir, file } = req.params;
  res.sendFile(path.join(__dirname, dir, `${file}.html`));
});
// ---------------------------

app.listen(8080, () => {
  console.log("express ok");
});
