	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Carros = sequelize.define('Carros',{
		id: {
			field: 'idCarro',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeCarro: {
			field: 'nomeCarro',
			type: DataTypes.STRING,
			allowNull: false
		},
		aceleração0_100: {
			field: 'aceleração0_100',
			type: DataTypes.FLOAT,
			allowNull: false
		},
		aceleração400m: {
			field: 'aceleração400m',
			type: DataTypes.FLOAT,
			allowNull: false
		},
		vMax: {
			field: 'Vmax',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		chargeRange: {
			field: 'chargeRange',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		peso: {
			field: 'peso',
			type: DataTypes.FLOAT,
			allowNull: false
		},
		potencia: {
			field: 'potencia',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, 
	{
		tableName: 'carros', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Carros;
};
