import AppDispatcher from '../Appdispatcher';
import { ActionTypes } from '../Constants';
let ServerActions = {
	receiveLinks(links) {
		console.log('dispatching...', links);
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_LINKS,
			links
		});
	}
};

export default ServerActions;
