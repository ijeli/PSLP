const router = require('express').Router();
const controller = require('../../controller/index.js');
const multer = require('multer');

const upload = multer({dest: 'image_repo'})

module.exports = router;

router.route('/').get(controller.findAllImageFiles);
router.route('/:id').get(controller.findOneImageFile);

router.route('/upload').post(upload.single('file'), controller.postOneImageFile);