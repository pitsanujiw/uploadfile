require('dotenv').config()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const Createpath = process.env.PATH_FILE
/**
 * @constant variable
 */
const image = 'image'
const application = 'application'
const audio = 'audio'
const text = 'text'
const video = 'video'
let pathfile
let ext
/**
 * @method Check Directory
 */
checkFilesDir = filePath => {
  let checkFiles = fs.existsSync(filePath)
  if (!checkFiles) fs.mkdirSync(filePath)
}
/**
 * upload file @module
 */
splitFileTypeDest = (file, cb) => {
  checkFilesDir(Createpath)
  const folderFileType = file.mimetype.split('/').shift()
  switch (folderFileType) {
    case image:
      pathfile = Createpath + '/images'
      checkFilesDir(pathfile)
      ext = path
        .extname(file.originalname)
        .split('.')
        .pop()
      break
    case application:
      pathfile = Createpath + '/documents'
      checkFilesDir(pathfile)
      ext = path
        .extname(file.originalname)
        .split('.')
        .pop()
      break
    case video:
      pathfile = Createpath + '/videos'
      checkFilesDir(pathfile)
      ext = path
        .extname(file.originalname)
        .split('.')
        .pop()
      break
    case audio:
      pathfile = Createpath + '/audios'
      checkFilesDir(pathfile)
      ext = path
        .extname(file.originalname)
        .split('.')
        .pop()
      break
    case text:
      pathfile = Createpath + '/texts'
      checkFilesDir(pathfile)
      ext = path
        .extname(file.originalname)
        .split('.')
        .pop()
      break
    default:
      console.log('Do not support mime type is ' + file.mimetype)
      break
  }
  checkFilesDir(path.join(pathfile, ext))
  cb(null, path.join(pathfile, ext))
}

const storage = multer.diskStorage({
  destination: (_, file, cb) => {
    splitFileTypeDest(file, cb)
  },
  filename: (_, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage
}).array('files')

module.exports = upload
