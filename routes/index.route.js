/**
 * @module
 */
const uploadfile = require('../controller/upload.controller').uploadfiles

module.exports = app => {
  app.post('/upload', (req, res) => {
    uploadfile(req, res)
      .then(result => {
        console.log(result)
        res.send(result)
      })
      .catch(_ => {
        res.sendStatus(404)
      })
  })
}
