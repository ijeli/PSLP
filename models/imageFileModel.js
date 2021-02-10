const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    let ImageFiles = sequelize.define("Files", {
        name: {
            type: DataTypes.STRING,
            validate: { notEmpty: true }
        },
        type: {
            type: DataTypes.STRING,
            validate: { notEmpty: true }
        },
        size: {
            type: DataTypes.STRING,
            validate: { notEmpty: true }
        },
        original_name: {
            type: DataTypes.STRING
        },
        path: {
            type: DataTypes.STRING,
        },
        latitudeDirect: {
            type: DataTypes.STRING
        },
        latitude: {
            type: DataTypes.DECIMAL(15,10)
        },
        longitudeDirect: {
            type: DataTypes.STRING
        },
        longitude: {
            type: DataTypes.DECIMAL(15,10)
        }
    });
    return ImageFiles;
}