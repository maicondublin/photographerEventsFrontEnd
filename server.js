const express = require('express')
const path = require('path')
const serverStatic = require('server-static')

const app = express()
app.use(serverStatic(path.join(__dirname, 'dist')))

const port = process.env.PORT || 3002

app.listen(port, function(){
    console.log('front end listen in '+ port)
})