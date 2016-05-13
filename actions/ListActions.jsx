var AppDispatcher = require('../dispatcher/AppDispatcher');

var ListActions = {
	newConnection: function(link, repoName) {
		AppDispatcher.dispatch({
			actionType: 'NEW_CONNECTION',
			target: {
				link: link,
				repoName: repoName
			}
		});
	}
};

module.exports = ListActions;