const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.json({message: 'okay'})
})

app.listen('4567')