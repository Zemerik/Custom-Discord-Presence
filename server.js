const express = require("express");
const server = express();
       

function keepAlive() {
  server.listen(3000, async () => {
   await console.log("Server Online ✅!!");
  });
}

module.exports = keepAlive;
