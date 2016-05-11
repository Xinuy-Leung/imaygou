var React = require('react');
var ListActions = require('../actions/ListActions');
var List = require('./List');
var ListStore = require('../stores/ListStore')

var ListController = React.createClass({
  newConnection: function (event) {
    ListActions.newConnection(event.target);
      // var link = event.target.getAttribute('data-link');
      // console.log(link)
  },
  getInitialState: function() {
    return { data:[],readme:''};
  },
  componentDidMount: function() {
      ListStore.addChangeListener(this._onChange);
    	this.props.promise.then(
    		value => this.setState({
    			data:value
    		}),
    		error => this.setState({
    			data:'error?'
    		}));
  },
  componentWillUnmount: function() {
    ListStore.removeChangeListener(this._onChange);
  },
  _onChange:function(){
    this.setState({
      readme:ListStore.getContent()
    })
  },
  render: function() {
    return <List data={this.state.data}
      onClick={this.newConnection} readme={this.state.readme}
    />;
  }
});

module.exports = ListController;