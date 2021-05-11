"use strict";

import express from 'express';
const app: express.Express = express();

const port: number = 5000;

app.get("/",function(req, res){
    res.send("hogehoge");
});

app.listen(port, () => {
    console.log("Listening port 5000")
});