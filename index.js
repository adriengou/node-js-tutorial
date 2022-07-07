const { debug } = require("console");
const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

//Functions

//Server

const server = http.createServer((req, res) => {
  let path = "./src/";

  switch (req.url) {
    case "/":
      path = path + "index.html";
      break;

    case "/about":
      path = path + "about.html";
      break;

    case "/contact":
      path = path + "contact-me.html";
      break;

    default:
      path = path + "404.html";
  }

  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
