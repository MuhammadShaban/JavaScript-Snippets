http
  .get("https://stackoverflow.com", resp => {
    let data = "";
    resp.on("data", chunk => (data += chunk));
    resp.on("end", () => console.log(JSON.parse(data)));
  })
  .on("error", err => console.log("Error: " + err.message));
