import express from "express";
const app = express();

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
app.use(express.static('files'));
// app.get("/", (req, res) => {
//   res.send("hola get desde express");
// });
// ---------------------------

app.listen(8080, () => {
  console.log("express ok");
});
