const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hey there! Welcome to the Verve.!");
});


app.listen(3000,()=>{
    console.log("This is Great! Our App is listing to port: ");
});


