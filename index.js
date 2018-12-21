const pkg = require('./package.json')

var appzip = require('appmetrics-zipkin')({
    host: '51.141.29.230',
    port: 9401,
    serviceName:pkg.name,
    sampleRate: 1.0
  });

const server = require('./lib/server')
const PORT = process.env.PORT || 8001
const log = require('./lib/log')

server.listen(PORT, () => {
    log().info(`${pkg.name} is running on ${PORT}` )
})