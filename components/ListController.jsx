var React = require('react');
var ListActions = require('../actions/ListActions');
var List = require('./List');
var Store = require('../stores/Store')
var $ = require('jquery');

var ListController = React.createClass({
  newConnection: function(event) {
    this.setState({
      loading: true
    });
    let link = event.target.getAttribute('data-link');
    let repoName = event.target.getAttribute('data-name');
    ListActions.newConnection(link,repoName);
  },
  getInitialState: function() {
    return {
      data: [],
      readme: ''
    };
  },
  componentDidMount: function() {
    Store.ListStore.addChangeListener(this._onChange);
    $.getJSON(this.props.source).then(
      value => this.setState({
        data: value
      }),
      error => this.setState({
        data: 'error?'
      }));
  },
  componentWillUnmount: function() {
    Store.ListStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({
      loading: false,
      readme: Store.ListStore.getReadmeContent()
    })
  },
  render: function() {
    return <List data={this.state.data} loading={this.state.loading}
      onClick={this.newConnection} readme={this.state.readme} />;
  }
});

module.exports = ListController;