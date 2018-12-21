const express = require ('express')
const app = express ()
const pkg = require ('../package.json')
const log = require('./log')
const request = require('request-promise-native')


app.get('/', async (req, res) => {
 //   let ua = req.get('User-Agent')
 //  console.log('someone hit my server')
   log().info (`${pkg.name} hit`)

   let data = await request({
       uri: 'http://51.141.103.65',
       method: 'GET'
   })
    res.send (`ms2 said : ${data}`)
})

const listen = (port, done) => {
    return app.listen(port, done)
}

module.exports = {
    listen
}