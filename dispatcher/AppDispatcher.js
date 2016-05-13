var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var Store = require('../stores/Store');

AppDispatcher.register(function(action) {
	switch (action.actionType) {
		case 'NEW_CONNECTION':
			Store.ListStore.getReadmeJSON(action.target);
			break;
		default:
			// no op
	}
})

module.exports = AppDispatcher;