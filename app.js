const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hey there! Welcome to the Verve.!");
});

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("This is Great! Our App is listing to port:", port);
});


