const server = require("./api/server.js");

const port = process.env.PORT || 5001;
server.listen(port, () => {
  console.log(`\n** Server listening in port: ${port} **\n`);
});
