Trill.Collections.Lists = Backbone.Collection.extend({
	initialize: function(array, options){
		this.board = options.board;
	},
	model: Trill.Models.List,
	url: "api/lists"
});