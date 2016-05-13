// index.jsx
var React = require('react');
var ReactDOM = require('react-dom');
var ListController = require('./components/ListController');

ReactDOM.render(
	<ListController source="https://api.github.com/users/Xinuy-Leung/repos" />,
	document.querySelector('#example')
);