console.log("starting app");

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs");

var dir = path.join(__dirname, "build");

var mime = {
  html: "text/html",
  txt: "text/plain",
  css: "text/css",
  gif: "image/gif",
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  js: "application/javascript",
};
 
app.get("*", function (req, res) {
  var file = path.join(dir, req.path.replace(/\/$/, "/index.html"));
  if (file.indexOf(dir + path.sep) !== 0) {
    return res.status(403).end("Forbidden");
  }
  var type = mime[path.extname(file).slice(1)] || "text/plain";
  var s = fs.createReadStream(file);
  s.on("open", function () {
    res.set("Content-Type", type);
    s.pipe(res);
  });
  s.on("error", function () {
    res.set("Content-Type", "text/plain");
    res.status(404).end("Not found");
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
