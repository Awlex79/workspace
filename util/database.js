/* const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node.js-awl',
    password: '0000'
});

module.exports = pool.promise();
*/
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node.js-awl', // database name
    'root', // root
    '0000', // password
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;
