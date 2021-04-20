var express = require('express');
var app = express();
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = '';



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
