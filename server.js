const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

const port = process.env.PORT || 3002

app.listen(port, function(){
    console.log('front end listen in '+ port)
})