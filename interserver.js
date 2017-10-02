const app = require('express')();
const fs = require('fs');
const os = require('os');
const path = require("path");

app.get('/', (req, res) => {
	res.send('hello world')
	console.log(os.networkInterfaces())
	console.log(os.platform())
	console.log(os.arch());
	console.log(fs.readdirSync('U:'))
})

app.listen(3000,'0.0.0.0', () => {
	console.log('listening on 3000....')
})
