const {Sequelize, DataTypes} = require('sequelize')

const db = new Sequelize({
	dialect:'postgress',
	database:'urlShortener',
	username:'shayan343',
	password: 'shayan343'
	
})

const URLs = db.define('urls', {
	id:{
		primaryKey: true,
		type: DataTypes.BIGINT
	},
	code:{
		type: DataTypes.String(7),
		unique: true
	},
	link: {
		type: DataTypes.TEXT,
		allowNull: false
	}
})

module.exports = {
	db,
	URLS
}
