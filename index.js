let express = require('express');
let app = express();
let fs = require('fs');

app.get('/dinosaurs', function(req, res) {
    let dinosaurs = fs.readFileSync('./dinosaurs.json');
    let dinoData = JSON.parse(dinosaurs);
    res.send(dinoData);
});

app.post('/dinosaurs', function(req, res){
    let dinosaurs = fs.readFileSync('./dinosaurs.json');
    let dinoData = JSON.parse(dinosaurs);
    // add item from user form
    dinosaurs.push(req.body);
    // save new dinosaur object
    fs.writeFileSync('./dinosaurs.JSON', JSON.stringify(dinosaurs));
    res.redirect('/dinosaurs');
})

app.get('/dinosaurs/:id', function(req, res) {
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    //get the array index from our url
    let dinoIndex = parseInt(req.params.id)
    res.send(dinoData[dinoIndex])
});

app.listen(3000);