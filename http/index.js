import http from "node:http";
// console.log(`🚀 ~ http:`, http)
// const server=http.createServer((peticion, respuesta)=>{

// })
const server = http.createServer((req, res) => {
  //   console.log(`🚀 ~ server ~ req:`, req);
  if ((req.method === "GET") & (req.url === "/hello")) {
    res.end("get desde node");
  }
  if (req.method === "POST") {
    res.end("post desde node");
  }
});
// console.log(`🚀 ~ server:`, server)

server.listen(8080, () => {
  console.log("server ok");
});
