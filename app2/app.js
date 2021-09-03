const express = require('express')
const app = express()
const port = 5000
const name = process.env.name || "World App 2"

    app.get('/', (req, res) => {
        res.send(`Hello ${name} !`)
    })
app.listen(port, () => {
    console.log(`Server Started on Port  ${port}`)
})