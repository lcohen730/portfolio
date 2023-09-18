/* require('dotenv').config() */

const express = require('express');
const app = express();
const PORT = 7000;
const path = require('path');

app.use(express.static('public'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

app.listen(PORT, () => {
	console.log(`${PORT} points to Ravenclaw`)
})