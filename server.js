"use strict";

const express = require("express");
const app = express();  /* this assigns the express()  to the constant app.express(). creates express application for project.*/

const port = 8080;

app.use(express.static("./public")); /*specifies that we want to serve our static files from directory in the root of the project named public*/

app.use(express.json());
app.use(express.urlencoded({extended: false}));

/*Piece of code that will serve our front-end once it's created*/

app.listen(port, () => { /*takes in our port # as it's 1st argument and a callback function as it's 2nd argument that logs to the console that the server is running*/
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});