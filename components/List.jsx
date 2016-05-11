// components/MyButton.jsx
var React = require('react');
var ListActions = require('../actions/ListActions');

var List = function(props) {
	var linkStyle ={
		cursor:'pointer'
	}
	// var data = props.data;
	// var dataHtml = data.map(function(dataItem,i){
	// 	return (<a data-link={dataItem.url + '/contents/README.md'} className='list-group-item' onClick={props.onClick} style={linkStyle}>{i}---{dataItem.name}</a>)
	// });
	var readmeHtml = props.readme;
  	return (<div className='container'>
		  		<div className='row'>
		  				<div className='col-md-4'>
			  				<div className='list-group'>
			  				{props.data.map(function(dataItem,i){
									return (<a data-link={dataItem.url + '/contents/README.md'} key={i} className='list-group-item' onClick={props.onClick} style={linkStyle}>{i}---{dataItem.name}</a>)
								})}
							</div>
						</div>
						<div className='col-md-8' dangerouslySetInnerHTML={{__html: readmeHtml}}></div>
		  		</div>
  			</div>);
	};

module.exports = List;