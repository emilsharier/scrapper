const PORT = process.env.PORT || 3000
const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./routes/index')(app)

// Server listen
app.listen(PORT, () => {
    console.log(`Server up and running at ${PORT}`)
})