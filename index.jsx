// index.jsx
var React = require('react');
var ReactDOM = require('react-dom');
var ListController = require('./components/ListController');
var $ = require('jquery')

ReactDOM.render(
  <ListController promise={$.getJSON("https://api.github.com/users/Xinuy-Leung/repos")} />,
  document.querySelector('#example')
);