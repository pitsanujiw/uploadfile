var upload = require('../src/upload')
const path = require('path')

uploadfiles = (req, res) => {
  return new Promise((resolve, reject) => {
    upload(req, res, err => {
      if (req.files === undefined) throw new Error('files is undefined')
      if (!err) {
        /**
         *  @returns Resolve files string
         */
        req.files.forEach(e => {
          let file = {
            pathFile: path.join(e.destination.split('.').pop(), e.filename)
          }
          myFiles = file
        })
        resolve(req.files)
      }
    })
  }).catch(err => {
    reject(console.error(`uploader error :  ${err}`))
  })
}

module.exports = {
  uploadfiles
}
