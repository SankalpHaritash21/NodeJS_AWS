var http = require("http");

//create a server object:
http
  .createServer((req, res) => {
    res.write("Deploying Node.Js on AWS"); //write a response to the client
    res.end(); //end the response
  })
  .listen(3000); //the server object listens on port 80
