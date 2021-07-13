const express = require('express')
const app = express()

const port = process.env.PORT || 4445

app.get('/',(req,res) => res.send("URL Shortener"))

app.listen(port,() => console.log("Server started on http://localhost:4445"))
