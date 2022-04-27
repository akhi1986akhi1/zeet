const express = require('express');
const fs = require('fs');
const contact = fs.readFileSync('contact.html','utf-8');
const app = express();
const port = 80;
app.get("/",(req,res)=>{
    res.status(200).send("This is home page of my first express app");

});
app.get("/home",(req,res)=>{
    res.status(200).send("This is home page of my first express app");

});
app.get("/about",(req,res)=>{
    res.status(200).send("This is about page of my first express app");

});
app.get("/service",(req,res)=>{
    res.status(200).send("This is service page of my first express app");

});
app.get("/contact",(req,res)=>{
    // res.status(200).send("This is contact page of my first express app");
    res.status(200).end(contact);

});
app.listen(port,()=>{
    console.log(`Applicatio started successfully on port ${port}`);
});