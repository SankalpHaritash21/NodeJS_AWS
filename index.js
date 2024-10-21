var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("** Welcome to GlobalLogic!!!! **"); //write a response to the client
    console.log("Server Running");
    res.end(); //end the response
  })
  .listen(80); //the server object listens on port 80
