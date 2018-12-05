const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 5000
const gBookRoutes = require('./routes/gbooks')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors())

app.get('/', (req, res, next) => {
    res.send('🍰')
})

app.use('/gbooks', gBookRoutes)

app.listen(port, () => console.log(`port ${port}`))