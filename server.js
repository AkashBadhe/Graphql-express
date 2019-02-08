import express from 'express';
import { MongoClient } from 'mongodb';

const MONGO_URL = 'mongodb://admin:Askext003@ds127015.mlab.com:27015/rgrdb';

let app = express();

app.use(express.static('public'));

let db;

MongoClient.connect(MONGO_URL, (err, client) => {
	if (err) throw err;
	db = client.db('rgrdb');
	app.listen(3000, () => console.log('Listening on port 3000'));
});

app.get('/data/links', (req, res) => {
	db.collection('links')
		.find({})
		.toArray((err, links) => {
			if (err) throw err;
			res.json(links);
		});
});
