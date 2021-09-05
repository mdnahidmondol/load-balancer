const express = require('express')
const app = express()
const port = 5000
const name = process.env.name || "Alsalam Alykom, this is app1 :)"

    app.get('/', (req, res) => {
        res.send(`Hello, ${name} !`)
    })
app.listen(port, () => {
    console.log(`Server Started on Port  ${port}`)
})