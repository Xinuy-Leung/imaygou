// actions/ButtonActions.js
var AppDispatcher = require('../dispatcher/AppDispatcher');

var ListActions = {
  newConnection: function (target) {
    AppDispatcher.dispatch({
      actionType: 'NEW_CONNECTION',
      target: target
    });
  },
};

module.exports = ListActions ;