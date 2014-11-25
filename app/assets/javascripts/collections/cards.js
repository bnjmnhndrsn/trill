Trill.Collections.Cards = Backbone.Collection.extend({
	initialize: function(array, options){
		this.list = options.list;
	},
	model: Trill.Models.Card,
	url: "api/cards",
	comparator: function(model){
		return +model.get("ord");
	}
});