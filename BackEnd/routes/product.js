
const router = require('express').Router()
const multer = require('multer')
const {userAuthentication} = require('../middlewares/Authentication')
const {adminAuthorization} = require('../middlewares/Authorization')
const {createProduct, updateProduct, deleteProduct, 
    getProductById, getAllProduct} = require('../controllers/productController')

var storage = multer.diskStorage(
    {
        destination: './public/images/',
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    }
)

var upload = multer( { storage: storage } )

// VIEW PRODUCT LIST
router.get('/list', (req, res) => res.render('./product/product_list'))
router.post('/list', userAuthentication, (req, res) => 
    res.status(200).json({message: 'You\'re now authenticated'})
)

// UPLOAD IMAGE FILE
router.post('/upload-image', upload.single('uploaded_image'), (req, res) => {
    const image_file = req.file
    console.log(image_file)
    res.status(200).json({message: 'Image has been uploaded'})
})

// CREATE
router.get('/create', (req, res) => res.render('./product/create_product'))
router.post('/create', userAuthentication, adminAuthorization, createProduct)

// UPDATE
router.get('/update', (req, res) => res.render('./product/update_product'))
router.put('/update/:id', userAuthentication, adminAuthorization, updateProduct)

// DELETE
router.get('/delete', (req, res) => res.render('./product/delete_product'))
router.delete('/delete/:id', userAuthentication, adminAuthorization, deleteProduct)

// GET PRODUCT
router.get('/find/:id', getProductById)
router.get('/get/:id', (req, res) => {
    res.render('./product/product')
})

// GET ALL PRODUCTS
router.get('/find', getAllProduct)

module.exports = router