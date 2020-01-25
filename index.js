var express = require('express');
var app = express();
var fs = require("fs");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://GUSGUS2:1KGhqkuG85hVeGzf@memerise-lk7lh.mongodb.net/test?retryWrites=true&w=majority';



app.get('/playerRank', function (req, res) {
    MongoClient.connect(url, { useUnifiedTopology: true }, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Memerise");
        var query = { "name": req.query.player };
        dbo.collection("Roblox").find(query).toArray(function (err, result) {
            if (err) throw err;
            db.close();
            console.log(result)
            res.end(JSON.stringify(result[0]));
        });
    });
    
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
