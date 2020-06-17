const vm = new Vue({
	el: '#app',
	data: () => ({
		tableHeaders: ['Nama', 'Keterangan', 'Harga', 'Jumlah'],
		products: [],
		tempProduct: {
			nama_produk: '',
			keterangan: '',
			jumlah: 0,
			harga: 0
		},
		fields: [
			{ name: 'Nama produk', key: 'nama_produk' },
			{ name: 'Keterangan', key: 'keterangan' },
			{ name: 'Harga', key: 'harga', type: 'number' },
			{ name: 'Jumlah', key: 'jumlah', type: 'number' },
		]
	}),
	methods: {
		async request(method = 'GET', data) {
			try {
				const response = await fetch(`http://localhost:3000/api/v1/produk`, {
					method,
					headers: {
				      'Accept': 'application/json',
				      'Content-Type': 'application/json'
				    },
					body: JSON.stringify(data),
				});

				return await response.json();
			} catch (err) {
				console.error(err);
			}
		},
		addProduct() {
			this.request('POST', this.tempProduct).then((product) => {
				this.products.push(product);

				this.tempProduct = {
					nama_produk: '',
					keterangan: '',
					jumlah: 0,
					harga: 0
				}
			});
		},
		deleteProduct(id) {
			this.request('DELETE', { id }).then(() => {
				const findIndex = this.products.findIndex((item) => item.id === id);

				this.products.splice(findIndex, 1);
			});
		}
	},
	created() {
		this.request().then((data) => {
			this.products = data.results;
		});
	}
})