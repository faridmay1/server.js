
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use("/", createProxyMiddleware({
  target: "https://redirector.googlevideo.com",
  changeOrigin: true,
  secure: false,
  ws: true,
  pathRewrite: {
    "^/": "/",
  },
  headers: {
    Host: "redirector.googlevideo.com",
    "User-Agent": "Googlebot/2.1 (+http://www.google.com/bot.html)"
  }
}));

app.listen(8080, () => {
  console.log("Proxy running on port 8080");
});
