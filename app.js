


const express = require('express');
const app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));
//app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile('index.html');
})
app.listen(3000, function() {
	//console.log('Running on port 3000.');
	console.log('Open your browser and enter: localhost:8080 to view the page');
});

