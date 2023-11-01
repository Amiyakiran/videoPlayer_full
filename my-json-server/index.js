//import json-server library in index.js file
const jsonServer = require('json-server')

//create a server for  media player app
const mediaPlayerServer = jsonServer.create()

//create path for json file
const router = jsonServer.router("db.json")

// middleware to convert json to js
const middleware = jsonServer.defaults()

//setup port for running server
const port = 4000 || process.env.PORT

//use miidleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// to listen server for resolving request from client
mediaPlayerServer.listen(port,()=>{
    console.log(`media player server started at ${port} and waiting for client request`);
}) 