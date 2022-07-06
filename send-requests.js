//require the http module to send the request
const https = require("https");

//----------------------GET REQUEST-----------------------------------------

//This object contains all the parameters of the get requests
const getOptions = {
  hostname: "example.com",
  port: 443,
  path: "/todos",
  method: "GET",
};

const getReq = https.request(getOptions, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    console.log("-----------------GET REQUEST-------------------------------");
    process.stdout.write(d);
  });
});

getReq.on("error", (error) => {
  console.error(error);
});

getReq.end();

//----------------------Post REQUEST-----------------------------------------
const data = JSON.stringify({
  todo: "Buy the milk",
});

const postOptions = {
  hostname: "whatever.com",
  port: 443,
  path: "/todos",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const postReq = https.request(postOptions, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    console.log("-----------------POST REQUEST-------------------------------");
    process.stdout.write(d);
  });
});

postReq.on("error", (error) => {
  console.error(error);
});

postReq.write(data);
postReq.end();
