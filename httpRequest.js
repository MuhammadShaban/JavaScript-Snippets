const https = require("https");

https
    .get('https://jsonplaceholder.typicode.com/posts/1', result => {
        let data = "";
        result.on("data", chunk => (data += chunk));
        result.on("end", () => console.log(JSON.parse(data)));
    })
    .on("error", console.error)
    .end();
