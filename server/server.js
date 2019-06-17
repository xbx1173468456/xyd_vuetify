const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const server = express()

// use middlewares
server.use(bodyParser.json())

// static resources
const staticPath = path.join(__dirname, '..', 'dist')
server.use(express.static(staticPath))
server.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'))
})

// start app
const PORT = process.env.PORT || 18000
server.listen(PORT, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Server is up on port', PORT)
  }
})
