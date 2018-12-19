const pkg = require('../package.json')
const log = require('./log')


const express = require('express')
const app = express()

app.get('/', (req, res) => {
    let ua = req.get('User-Agent')
 //  console.log('someone hit my server')
   log().info (ua, `${pkg.name} hit`)
    res.send ('THIS IS COOLer')
})
const listen = (port, done) => {
    return app.listen(port, done)
}


module.exports = {
    listen
}