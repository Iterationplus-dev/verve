const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hey there! Welcome to the Verve.! And i just added this codes");
});

app.get('/about',(req,res)=>{
     res.send("This is the about page...");
});


app.get('/api',(req,res)=>{
    res.json({message:"Good"});
});

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("This is Great! Our App is listing to port:", port);
});


