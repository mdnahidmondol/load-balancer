const express = require('express')
const app = express()
const port = 5000
const name = process.env.name || "Walaikum salam, this is app2 :)"

    app.get('/', (req, res) => {
        res.send(`Hello, ${name} !`)
    })
app.listen(port, () => {
    console.log(`Server Started on Port  ${port}`)
})