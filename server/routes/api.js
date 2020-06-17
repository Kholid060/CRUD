const express = require('express')
const router = express.Router()
const connection = require('../connection')

router.get('/produk', (req, res) => {
	connection.query(`SELECT * FROM produk`, (error, results, fields) => {
		res.send({results})
	})
})

router.put('/produk', (req, res) => {
	const { nama_produk, keterangan, harga, jumlah, id } = req.body;

	connection.query(`UPDATE produk SET nama_produk = ?, keterangan = ?, harga = ?, jumlah = ? WHERE produk.id = ?`,
	 [nama_produk, keterangan, harga, jumlah, id], 
	 (err, result) => {
		res.send({message: 'update success'})
	})
})

router.delete('/produk', (req, res) => {
	const { id } = req.body;

	connection.query(`DELETE FROM produk WHERE produk.id = ?`, [id], (err, result) => {
		res.send({message: 'delete success'})
	})
})

router.post('/produk', (req, res) => {
	const { nama_produk, keterangan, harga, jumlah } = req.body;

	connection.query(`INSERT INTO produk (nama_produk, keterangan, harga, jumlah) VALUES (?, ?, ?, ?)`,
	 [nama_produk, keterangan, harga, jumlah],
	 (err, results) => {
		res.send({ ...req.body });
	});
})

module.exports = router;