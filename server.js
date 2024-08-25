const express = require('express');
const path = require('path')

const app = express();

app.get('/' , function(req,res){
    res.sendFile(path.resolve(__dirname , 'static' , 'index.html'));
})

app.get('/feature' , function(req,res){
    res.sendFile(path.resolve(__dirname , 'static' , 'feature.html'));
})

app.get('/download' , function(req,res){
    res.download(path.resolve(__dirname , 'static' , 'index.html'));
})

app.listen(4450, () => {
    console.log("Servers is started...");   
});