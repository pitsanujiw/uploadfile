require('dotenv').config()
const app = require('./config/express')()
/**
 *
 * Params
 */
const api = process.env.API_HOSTNAME
const ports = process.env.API_PORT
let server

/** start services?
 * @host Starting ....
 */
startListening = () => {
  server = app.listen(ports, api, () => {
    const port = server.address().port
    const hostname = server.address().address
    console.log(`Server running at ${hostname}:${port}  ✨ ✨`)
  })
}
/**
 * @function disconnection server
 */
stopListening = () => {
  console.log('Closing server now... 🔒')
}

/**
 *
 */
startListening()
