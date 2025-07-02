"use strict";

const express = require("express");
const app = express();  /* this assigns the express()  to the constant app.express(). creates express application for project.*/

const port = 8080;

app.use(express.static("./public")); /*specifies that we want to serve our static files from directory in the root of the project named public*/

app.use(express.json());
app.use(express.urlencoded({extended: false}));

async function getRandomImage() {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        return receivedPhotoUrl;
    } catch (error) {
        console.error(error);
    }
}

getRandomImage();

/*Piece of code that will serve our front-end once it's created*/
app.use("/api/v1/getRandomImage", async (request, response) => {
    response.status(200).json({
        status: 200,
        data: await getRandomImage(),
    });
});



app.listen(port, () => { /*takes in our port # as it's 1st argument and a callback function as it's 2nd argument that logs to the console that the server is running*/
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});

require("dotenv").config();
const cors = require("cors");
const corsOptions = {
    origin: `http://localhost:${port}`
}
app.use(cors(corsOptions ));