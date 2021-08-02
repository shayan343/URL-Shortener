const express = require('express')
const { db } = require('./models/db')
const linksRoute = require('./routes/links')
const redirRoute = require('./routes/redirection')
const cors = require('cors')

const app = express()


app.use(cors())

app.use(express.json())

app.use('/api/links', linksRoute)
app.use('/', redirRoute)

db.sync({force: true}) 
    .then(() => console.log('db works'))
    .catch((err) => console.error(err))

app.listen(8080, () => {
    console.log('Server started on http://localhost:8080')
})
