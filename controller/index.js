const db = require('../models');

module.exports = {
    findAllImageFiles: (req, res) => {
        db.Files
        .findAll()
        .then(images => res.json(images))
        .catch(err => res.status(500).json(err));
    },

    findOneImageFile: (req, res) => {
        db.Files
        .findByPk(req.params.id)
        .then(image => res.json(image))
        .catch(console.err);
    },

    postOneImageFile: (req, res) => {
        console.log(req.file);
        console.log(req.body.fileMetaData);

        let fileInfoObject = {
            name: req.file.filename,
            type: req.file.mimetype,
            size: req.file.size,
            path: req.file.path,
            original_name: req.file.originalname,
            latitudeDirect: req.body.fileMetaData[0],
            longitudeDirect: req.body.fileMetaData[1],
            latitude: req.body.fileMetaData[2],
            longitude:req.body.fileMetaData[3]
        }
    
        db.Files
            .create(fileInfoObject)
            .then(image => res.json(image))
            .catch(console.err)
    }
}