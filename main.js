const axios = require('axios');
const settings = require('./settings.json');

const url = `https://speedtest-${settings.location}.vocus.net:8080/download?&size=${settings.size}`;
console.log('starting infinite speedtest at ' + url);
(async function main() {
	let i = 1;
	setInterval(async () => {
		try {
			await axios.get(url);
			console.log('success #' + i);
		} catch (err) {
			console.log('error #' + i + ':');
			console.log(err.data);
		} finally {
			i++;
		}
	}, settings.frequency)
})();