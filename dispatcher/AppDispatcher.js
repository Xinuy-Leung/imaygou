var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'NEW_CONNECTION':
      let attrLink = action.target.getAttribute('data-link');
      ListStore.getReadmeJSON(attrLink);
      break;
    default:
      // no op
  }
})

module.exports = AppDispatcher;
