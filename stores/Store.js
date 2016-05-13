var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var markdown = require('markdown').markdown;
var $ = require('jquery');

var ListStore = assign({}, EventEmitter.prototype, {
    ReadmeContent: {},
    lastRepoName: '',
    getReadmeContent: function() {
        let repoName = this.lastRepoName;
        return this.ReadmeContent.repoName;
    },
    getReadmeJSON: function(target) {
        let link = target.link;
        let repoName = this.lastRepoName = target.repoName;
        var self = this;
        $.ajaxSetup({
            timeout: 1000
        });

        function getFromLink(link) {
            $.getJSON(link).then(
                value => {
                    let content = new Buffer(value.content, 'base64').toString();
                    content = markdown.toHTML(content);
                    self.ReadmeContent.repoName = content;
                    self.emitChange();
                },
                (xhr, errorText) => {
                    console.log(errorText);
                    if (self.ReadmeContent.repoName) {
                        this.emitChange();
                    } else {
                        getFromLink(link);
                    }
                }
            )
        };
        getFromLink(link);
    },
    emitChange: function() {
        this.emit('change');
    },
    addChangeListener: function(cb) {
        this.on('change', cb);
    },
    removeChangeListener: function(cb) {
        this.removeListener('change', cb)
    }
})

var Store = assign({}, {
    ListStore: ListStore
});

module.exports = Store;