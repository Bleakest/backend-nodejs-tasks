// const server = http.createServer(async (req, res) => {
//   if (req.method === "GET") {
//     const content = await fs.readFile(path.join(basePath, "index.html"));
//     res.setHeader("Content-Type", "text/html");
//     res.writeHead(200);
//     res.end(content);
//   } else if (req.method === "POST") {
//     const body = [];
//     req.on("data", (data) => {
//       body.push(Buffer.from(data));
//     });

//     req.on("end", () => {
//       const title = body.toString();
//       addNote(title);
//       res.end("POST SUCCESS");
//     });
//   }
// });
