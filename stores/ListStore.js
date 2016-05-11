var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var markdown = require('markdown').markdown;
var $ = require('jquery');

var ListStore = assign({}, EventEmitter.prototype, {
    ReadmeContent:'',
	getContent:function(){
		return this.ReadmeContent;
	},
    getReadmeJSON: function(link) {
        $.getJSON(link).then(
			value => {let content = new Buffer(value.content,'base64').toString();
                          content = markdown.toHTML(content);
					      this.ReadmeContent = content;
                          this.emitChange();},
            error => console.log(error)
        )
    },
    emitChange:function(){
    	this.emit('change');
    },
    addChangeListener:function(cb){
    	this.on('change',cb);
    },
    removeChangeListener:function(cb){
    	this.removeListener('change',cb)
    }
})

module.exports = ListStore;
