const path = require('path')
const express = require('express')
const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})
app.listen(3000, () => console.log('App listening on port 3000!'))
