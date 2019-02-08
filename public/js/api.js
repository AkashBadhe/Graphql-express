import ServerAction from './actions/ServerActions';

let API = {
	getLinks() {
		return new Promise((res, rej) => {
			fetch('/data/links')
				.then(response => response.json())
				.catch(error => console.error('Error:', error))
				.then(response => ServerAction.receiveLinks(response));
		});
	}
};

export default API;
