
const router = require('express').Router()
const multer = require('multer')
const {userAuthentication} = require('../middlewares/Authentication')
const {adminAuthorization} = require('../middlewares/Authorization')
const {getProductById, getAllProduct, createProduct, 
    updateProduct, deleteProduct} = require('../controllers/product')

var storage = multer.diskStorage(
    {
        destination: './public/images/',
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    }
)

var upload = multer( { storage: storage } )

// UPLOAD IMAGE FILE
router.post('/upload-image', upload.single('uploaded_image'), (req, res) => {
    const image_file = req.file
    console.log(image_file)
    res.status(200).json({message: 'Image has been uploaded'})
})

// GET PRODUCT BY ID
router.get('/:id', getProductById)

// GET ALL PRODUCTS
router.get('/', getAllProduct)

// CREATE
router.post('/', userAuthentication, adminAuthorization, createProduct)

// UPDATE BY ID
router.put('/:id', userAuthentication, adminAuthorization, updateProduct)

// DELETE BY ID
router.delete('/:id', userAuthentication, adminAuthorization, deleteProduct)

module.exports = router