// let http = require("http")

// let ourApp = http.createServer(function(req, res){
//     if(req.url == '/') {
//         res.end("Hello and welcome to our home page");
//     }
//     if(req.url == "/about") {
//         res.end("Thnakyou for the interest for the componey")
//     }
// });
// ourApp.listen(3000);


// Build server using express after installing express
let express = require('express');
let app = express();
app.use(express.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.send(`
        <form action="/answer" method="POST">
            <p>What color is the sky on a clear and sunny day ?</p>
            <input name="skyColor" autocomplete="off"/>
            <button>Submit Answer</button>
        </form>
    `)
})

app.post("/answer", function(req, res) {
    if(req.body.skyColor.toLowerCase() == 'blue') {
        res.send(`
            <p>Congrats that may be the correct answer</p>
            <a href="/">Back to homepage</a>
        `)
    } else {
        res.send(`
            <p>Sorry It was incrrect</p>
            <a href="/">Back to homepage</a>
        `)
    }
})

app.get("/answer", function(req, res) {
    res.send("Are u Lost")
})

app.listen(3000)
