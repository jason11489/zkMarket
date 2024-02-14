import _ from 'lodash'
import multer from 'multer'

import { dbPath } from '../config'


export const uploadMiddleware = multer({
    limits:{fieldSize: 25 * 1024 * 1024},
    storage : multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, dbPath+'image/')
        },
        filename : (req, file, cb) => {
            cb(null, _.get(file, 'originalname'))
        },
    }),
    fileFilter : (req, file, cb) => {
        return cb(null, true)
    },
})

export const uploadController = (req, res) => {
    console.log(req.body)
    res.send(true)
}

export default {
    uploadMiddleware,
    uploadController
}