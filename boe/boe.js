var request = require('request');

let urlBase = "https://www.boe.es/diario_boe/xml.php?id=BOE-B-2018-961";

request(urlBase, function (error, response, body) {
	console.log('error:', error); // Print the error if one occurred
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	console.log('body:', body); // Print the HTML for the Google homepage.
});
