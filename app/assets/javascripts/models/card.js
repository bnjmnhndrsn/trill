Trill.Models.Card = Backbone.Model.extend({
	initialize: function(array, options){
		if (options && options.list){
			this.list = options.list;
		}
		
	},
	urlRoot: "api/cards"
})