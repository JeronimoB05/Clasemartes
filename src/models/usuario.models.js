const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const usuario = sequelize.define('Usuario',{ 
    id:{
        type: DataTypes.INTEGER,
        auntoincrement: true,
        primarykey: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
        correo:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true

        }
    
},{
    tableName:'usuarios',
    timestamps:true
});

module.exports =usuario;