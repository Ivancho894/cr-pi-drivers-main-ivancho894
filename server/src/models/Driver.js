const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING
    },
    nationality:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    dayofbirth:{
      type: DataTypes.STRING,
      allowNull: false,
    }

  },{
    timestamps:true,
    createdAt: false,
    updatedAt: 'actualizado'
 });
};