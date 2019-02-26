const http = require("http");
const url = require("url");

export const isUrlReachable = (Url, callback) => {
  const options = {
    method: "HEAD",
    host: url.parse(Url).host,
    port: 80,
    path: url.parse(Url).pathname
  };

  http
    .request(options, result =>
      callback(/4\d\d/.test(result.statusCode) === false)
    )
    .on("error", error => callback(false))
    .end();
};

isUrlReachable("https://stackoverflow.com", console.log);
isUrlReachable("https://stackoverfflow.com", console.log);
