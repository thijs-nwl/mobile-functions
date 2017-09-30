const app = require('express')();
const fs = require('fs');

const fs = require('fs');
const { URL } = require('url');
const fileUrl = new URL('content://0@media/external/file/180');


app.get('/', (req, res) => {
	res.send('hello world');
	console.log(fs.readFileSync(fileUrl));
})

app.listen(3000, () => {
	console.log('listening on 3000....')
})
