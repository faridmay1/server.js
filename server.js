const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  req.headers['host'] = 'www.google.com';
  req.headers['user-agent'] = 'Googlebot/2.1 (+http://www.google.com/bot.html)';
  proxy.web(req, res, {
    target: "https://www.google.com",
    changeOrigin: true,
    secure: false
  });
});

server.listen(process.env.PORT || 8080, () => {
  console.log("YT Tunnel proxy running");
});
