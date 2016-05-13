var React = require('react');
var ListActions = require('../actions/ListActions');

var List = function(props) {
	var linkStyle = {
		cursor: 'pointer'
	};
	// var data = props.data;
	// var dataHtml = data.map(function(dataItem,i){
	// 	return (<a data-link={dataItem.url + '/contents/README.md'} className='list-group-item' onClick={props.onClick} style={linkStyle}>{i}---{dataItem.name}</a>)
	// });
	if (props.loading === true) {
		var rightPart = <div className='col-md-8'>Loading.....</div>;
	} else {
		let readmeHtml = props.readme;
		var rightPart = <div className='col-md-8' dangerouslySetInnerHTML={{__html: readmeHtml}}></div>;
	}
	return (<div className='container'>
		  		<div className='row'>
		  				<div className='col-md-4'>
			  				<div className='list-group'>
			  				{props.data.map(function(dataItem,i){
									return (<a data-link={dataItem.url + '/contents/README.md'} data-name={dataItem.name} key={i} className='list-group-item' onClick={props.onClick} style={linkStyle}>{i}---{dataItem.name}</a>)
								})}
							</div>
						</div>
						{rightPart}	
		  		</div>
  			</div>);
};

module.exports = List;