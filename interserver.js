const app = require('express')();

app.get('/', (req, res) => {
	res.send('hello world');
})

app.listen(3000, '0.0.0.0', () => {
	console.log('listening on 3000....')
})
