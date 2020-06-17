const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'arkademy'
});

connection.connect((err) => {
	if(err) throw err;
	console.log('db connected');

	// const query = `
	// 	CREATE TABLE produk (
	//		id INT AUTO_INCREMENT PRIMARY KEY,
	// 		nama_produk VARCHAR(255) NOT NULL,
	// 		keterangan VARCHAR(255) NOT NULL,
	// 		harga MEDIUMINT NOT NULL,
	// 		jumlah SMALLINT NOT NULL
	// 	)
	// `

	// connection.query(query, (err, res) => {
	// 	if (err) throw err;
 //    	console.log("Table created");
	// });
});

module.exports = connection;